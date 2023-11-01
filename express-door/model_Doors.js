const mongoose = require('mongoose');

let doorSchema = mongoose.Schema({
    width_in: Number,
    height_in: Number,
    type: String,
})

//const Door = mongoose.model('Door', {
//    width_in: Number,
//    height_in: Number,
//    type: String,
//})


doorSchema.statics.createDemoDoors = function() {
//const createDemoDoors = () =>  {
    Door.estimatedDocumentCount().then(count => {
        if (count > 0) {
            console.log('Some doors already exist');
            return;
        }

        const slidingDoor = new Door({
            width_in: 23,
            height_in: 60,
            type: 'Sliding',
        })
    
        slidingDoor.save().then(
            () => { console.log(`Sliding door saved`)}
        )
    
        const basicDoor = new Door({
            width_in: 50,
            type: 'Basic',
        })
    
        basicDoor.save().then(
            () => { console.log(`Basic door saved`)}
        )
    })
};

doorSchema.statics.getAllDoors = function(done) {
//const getAllDoors = (done) => {
    Door.find().then(function (doors, err) {
        if (err) {
            done(err, null)
        } else {
            done(null, doors)
        }
    })
};

let Door = mongoose.model('Door', doorSchema)

module.exports = Door;