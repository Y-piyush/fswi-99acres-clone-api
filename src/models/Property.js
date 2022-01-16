const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const propertySchema = new Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  propertyImage: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  type:{
    type: String,
    required:true
  },
  address:{
    type: String, 
    required: true
  },
  pinCode:{
    type: Number, 
    required: true
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now }
}, {
  usePushEach: true
});

mongoose.model('Property', propertySchema);
