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

//route for creating a beer as a brewing account
beerRouter.post('/:brewery/beers/create/', (req, res, next) => {
  Beer.create({
    name: req.body.name,
    description: req.body.description,
    alchContent: req.body.alchContent,
    price: req.body.price,
  })
    .then((response) => {
    res.json(response)
    })
    .catch((err) => {
      res.json(err);
    })
})

// :brewery will be saved for the brewery object ID,
// req.params.brewery should pull that ID fingers crossed I guess
beerRouter.get('/:brewery/beers/:id', (req, res, next)=>{
  Beer.findById(req.params.id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  });
});

//route for editing a beer and descriptions etc.
beerRouter.post('/:brewery/beers/:id/edit', (req, res, next)=>{
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
beerRouter.post('/:brewery/beers/:id/delete', (req, res, next) =>{
  Beer.findByIdAndRemove(req.params.id)
    .then((response)=>{
      res.json(response);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = beerRouter;
