const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema({
    body : String,
    datePosted:{
        type: Date,
        default: new Date()
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
})