const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snackSchema = new Schema({
name: { type: String, required: true },
brand: { type: String, required: true  },
category: { type: String, required: true  },
})

const Snack = mongoose.model('Snack', snackSchema);

module.exports = Snack;