// models/Ad.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const adSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  campaign: { type: Schema.Types.ObjectId, ref: 'Campaign' },
  createdAt: { type: Date, default: Date.now }
});

const Ad = model('Ad', adSchema);

module.exports = Ad;