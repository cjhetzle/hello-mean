const express = require('express')
const Door = require('./model_Doors')

module.exports = function(app) {
    const router = express.Router();

    router.route('/doors')
    .get(
        function(req, res) {
            Door.getAllDoors( (err, doors) => {
                if (err) {
                    console.log(`${err}`);
                    res.status(404).json({'msg': 'Not found'});
                } else {
                    console.log(`${doors}`);
                    res.json(doors);
                }
            })
        }
    )

    router.route('/door')
    .post(
        function(req, res) {
            console.log(req.body);
            const {width_in, height_in, type} = req.body;
            const door = new Door({width_in, height_in, type});
            door.save().then((newDoor, err) => {
                if (err) {
                    console.log(`${err}`)
                    res.status(400).json({'msg':'Error creating door'});
                } else {
                    res.json(newDoor);
                }
            })
        }
    )

    app.use("/api", router);
}