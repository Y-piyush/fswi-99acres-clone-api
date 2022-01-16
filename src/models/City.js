const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const citySchema = new Schema({
  name: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now },
}, {
  usePushEach: true
});

mongoose.model('City', citySchema);