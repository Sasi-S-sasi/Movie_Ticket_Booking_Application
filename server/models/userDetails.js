const mongoose = require('mongoose');

const userDetailschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    
    screen : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    seatNo : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('users', userDetailschema);