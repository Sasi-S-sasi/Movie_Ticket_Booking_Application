const mongoose = require('mongoose');

const seatDetailschema = mongoose.Schema({
    seatNumber : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    Screen : {
        type : String,
        requid : true
    }
});

module.exports = mongoose.model('Seats', seatDetailschema);
