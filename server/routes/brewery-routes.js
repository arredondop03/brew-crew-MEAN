const express    = require('express');
const breweryRouter = express.Router();
const Beer       = require('../models/beer');
const Brewery    = require('../models/brewery');

breweryRouter.get('/breweries', (req, res, next) => {
  Brewery.find()
    .then((allTheBreweries) => {

      res.json(allTheBreweries);
    })
    .catch((err)=> {
      res.json(err)
    })
});

breweryRouter.post('/:brewery/create', (req, res, next) => {
  Brewery.create({
    name: req.body.name,
    location: [{
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip
    }],
    phone: req.body.phone,
    site: req.body.site,
    // beers:
  });
});

module.exports = breweryRouter;
