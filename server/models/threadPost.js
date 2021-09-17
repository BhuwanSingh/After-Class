const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadPostSchema = new Schema({
    content : String,
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    img: {
        data : Buffer,
        contentType : String
    },
    num_of_comments: {
        type: Number,
        default: 0
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
});

const ThreadPost = mongoose.model("ThreadPost", ThreadPostSchema);
module.exports = ThreadPost;