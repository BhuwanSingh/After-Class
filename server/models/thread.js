const mongoose = require("mongoose");
const Thread = new mongoose.Schema({
    name : String,
    description : String
});
