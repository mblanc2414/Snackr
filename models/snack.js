// This requires mongoose for user info
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// This allows user to add info to database
const snackSchema = new Schema({
name: { type: String, required: true },
brand: { type: String, required: true  },
img: { type: String, required: false},
category: { type: String, required: true  },
})

const Snack = mongoose.model('Snack', snackSchema);

module.exports = Snack;