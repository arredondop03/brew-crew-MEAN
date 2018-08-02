const express    = require('express');
const beerRouter = express.Router();
const Beer       = require('../models/beer');
const Brewery    = require('../models/brewery');

//this should get all the beers regardless of the brewery?
//nested then
beerRouter.get('/beers', (req, res, next) => {
  Beer.find()
    .then((allTheBeers) => {
      res.json(allTheBeers);
      })
    .catch((err) => {
      res.json(err)
      })
    });

//route for creating a beer
beerRouter.post('/beers/create/', (req, res, next) => {
    Beer.create({
      name: req.body.name,
      brewery: req.body.brewery
      description: req.body.description,
      alchContent: req.body.alchContent,
      price: req.body.price
    })
    .then((createdBeers)=>{
    Brewery.findByAndUpdate(req.brewery._id, {beers: createdBeers._id})
    .then((response) => {
        res.json(response)
      })
    .catch((err) => {
      res.json(err);
    });
});

//get specific beer
beerRouter.get('/beers/:id', (req, res, next)=>{
  Beer.findById(req.params.id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  });
});

//route for editing a beer and descriptions etc.
beerRouter.post('/beers/:id/edit', (req, res, next)=>{
  Beer.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    alchContent: req.body.alchContent,
    price: req.body.price
  })
  .then((response) => {
    res.json(response)
  })
  .catch((err) => {
    next(err);
  });
});

//route for deleting a beer
beerRouter.post('/beers/:id/delete', (req, res, next) =>{
  Beer.findByIdAndRemove(req.params.id)
    .then((response)=>{
      res.json(response);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = beerRouter;
