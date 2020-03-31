const mongoose = require('mongoose');

IMSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  message: { type: String, required: true }
});

mongoose.model('Messenger', IMSchema);
