const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: String,
  buyPrice: Number,
  sellPrice: Number,
  category: String,
});

module.exports = mongoose.model('Item', itemSchema);
