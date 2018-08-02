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


//Beers from that one brewery    
beerRouter.get('/breweries/:id/beers', (req, res, next)=>{
  const id = req.params.id;

  Brewery.findById(id)
  .then((breweryFromBD) =>{
    Beers.find(breweryFromBD.beers)
    .then((beersFromDB)=>{
      res.json(beersFromDB)
    })
    .catch((err)=>{
      res.json(err)
    });
  })
  .catch((err)=>{
    res.json(err)
  });
});


//route for creating a beer
//works but will not add to a brewery
beerRouter.post('/breweries/:id/beers/create', (req, res, next) => {
  const newBeer = new Beer({
    name: req.body.name,
    description: req.body.description,
    alchContent: req.body.alchContent,
    price: req.body.price
  });
  newBeer.save()
    .then((response) => {
      console.log("I am the new Beer", response);
      Brewery.findById(req.brewery._id)
      .then(thatBrewery => {
        console.log("Say Hello ", req.brewery._id);
          thatBrewery.itsBeerArray.push(response._id);
          console.log("Let's get that Beer", thatBrewery);
          thatBrewery.save()
          .then(()=>{
            res.json(response);
          })
          .catch((err)=>{
            res.json(err);
          });
        })
        .catch((err)=>{
          res.json(err);
        });
      })
    .catch((err) => {
        res.json(err);
      });
    });

//get specific beer
//works
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
beerRouter.post('/breweries/:id/beers/edit/:beerid', (req, res, next)=>{
  Beer.findByIdAndUpdate(req.params.beerid, {
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
beerRouter.post(`/breweries/:id/beers/delete/:beerid`, (req, res, next) =>{
  Beer.findByIdAndRemove(req.params.beerid)
    .then((response)=>{
      res.json(response);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = beerRouter;