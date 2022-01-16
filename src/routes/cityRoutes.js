const req = require('express/lib/request');

const citiesController = require('../controllers/citiesController');

module.exports = (app) => {
  //adaptive practive routes 
  app.get('/cities', citiesController.index);
  app.get('/cities/:id', citiesController.show);
  app.post('/cities', citiesController.create);
  app.put('/cities/:id', citiesController.update);
  app.delete('/cities/:id', citiesController.destroy);
  app.get('/cities/:id/properties', citiesController.properties);
}
