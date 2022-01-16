const mongoose = require('mongoose');
const City = mongoose.model('City');
const Property = mongoose.model('Property');

// List City action
exports.index = function(req, res, next) {
  City.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch cities '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show City action
exports.show = function(req, res, next) {
  City.findOne({ _id: req.params.id })
    .then(city => {
      return res.status(200).send(city);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}
// Create City action
exports.create = function(req, res, next) {
  const city = new City({
    name: req.body.name,
    isActive: req.body.isActive
  })
  city.save(function(error, savedObject) {
    if(error) {
      return res.status(422).send({ message: 'Unable to save this city', error: error })
    } else {
      return res.status(200).send(savedObject)
    }
  })
}

// Update City action
exports.update = function(req, res, next) {
  let city ={};
  city.name = req.body.name
  city.isActive = req.body.isActive

  let query = {_id:req.params.id}
  City.updateOne(query, city, function(error, savedObject){
    if (error) {
      return res.status(422).send({ message: 'Unable to update this city', error: error })
      return 
    }else{
      return res.status(200).send(savedObject)
    }
  })
}


// Delete City action
exports.destroy = function(req, res, next) {
  // TODO
}

// City property
exports.properties = function(req, res, next) {
  console.log(req.params.id)
  // Find City
  City.findOne({ _id: req.params.id })
  .then(city => {
    Property.find({ city: city }, function(error, objects) {
      if(error) {
        res.status(422).send({ error: 'Unable to fetch Properties '})
      } else {
        res.status(200).send(objects)
      }
    })  
  })
  .catch(error => {
    return res.status(400).send({ error: 'Unable to find this resource' });
  })
}