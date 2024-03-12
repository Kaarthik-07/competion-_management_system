const mongoose = require('mongoose');
//for wrting schemas
const schema = mongoose.Schema

//for crerating routes

const form = require  ('../../backend/modals/form');
const formSchema = new schema({
    compname: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    day: {
        type: String,
        require: true
    }

},{
    timestamps: true
})

//collection storing name

const Form = mongoose.model('FormData',formSchema);

module.exports = Form;