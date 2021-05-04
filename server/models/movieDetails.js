const mongoose = require('mongoose');

const movieDetailschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    screen :{
        type:String,
        required : true
    }
});

module.exports = mongoose.model('movies', movieDetailschema);