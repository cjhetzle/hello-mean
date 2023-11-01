const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

var db = require('./db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes')(app);

/**db.createDemoDoors();

db.getAllDoors((err, doors) => {
    console.log(`${!err ? doors : err}`);
})**/

app.get('/', (req, res) => {
    res.send('Hi');
})

app.listen(port,  () => {
    console.log(`App listening ${port}`);
})