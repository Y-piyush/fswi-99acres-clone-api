const mongoose = require('mongoose');
const City = mongoose.model('City');
const Property = mongoose.model('Property');

// List properties action
exports.index = function(req, res, next) {
  Property.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch properties '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show Property action
exports.show = function(req, res, next) {
  Property.findOne({ _id: req.params.id })
    .populate('City')
    .then(Property => {
      return res.status(200).send(Property);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}

// Create Property action
exports.create = function(req, res, next) {
  console.log(req.file);
  console.log(req.body.city);
  // Find City
  City.findOne({ _id: req.body.city })
    .then(city => {
      // Create property
        const property = new Property({
          city: city,
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          propertyImage: req.file.path,
          isPublished: req.body.isPublished,
          type: req.body.type,
          address: req.body.address,
          pinCode: req.body.pinCode,
        })
        property.save(function(error, savedObject) {
          if(error) {
            return res.status(422).send({ message: 'Unable to save this property', error: error })
          } else {
            return res.status(200).send(savedObject)
          }
        })
    })
    .catch(error => {
      return res.status(400).send({ error: 'Invalid City' });
    })
}

// Update property action
exports.update = function(req, res, next) {
  // TODO
}

// Delete property action
exports.destroy = function(req, res, next) {
  // TODO
}
