const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/doorDB', {family: 4})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Database connected`);
});



module.exports = db;//{createDemoDoors, getAllDoors}