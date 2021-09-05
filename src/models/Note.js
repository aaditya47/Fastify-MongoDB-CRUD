/*
Import Mongoose and its Schema object
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;


/*
Note Schema definition
*/
const Note = mongoose.model('note', new Schema({
    text: { text: String, required: true },
}));

module.exports = Note;