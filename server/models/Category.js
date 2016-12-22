const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: String,
});

module.exports = mongoose.model('Category', categorySchema);