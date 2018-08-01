const express       = require('express');
const breweryRouter = express.Router();
const Beer          = require('../models/beer');
const Brewery       = require('../models/brewery');


//All breweries
breweryRouter.get('/breweries', (req, res, next) => {
  Brewery.find()
    .then((allTheBreweries) => {
      res.json(allTheBreweries);
    })
    .catch((err)=> {
      res.json(err);
    });
});

//One Brewery
breweryRouter.get('/breweries/:id', (req, res, next)=>{
  Brewery.findById(req.params.id)
  .then((breweryFromDB)=>{
    Beer.findById({_id: breweryFromDB.beers})
    .then((beersFromDB)=>{
      Review.findById({_id: beersFromDB.review})
      .then((reviewFromDB)=>{
        data = {
          Brewery: breweryFromDB,
          Beer: beersFromDB,
          Review: reviewFromDB
        }
        res.json(data)
      })
      .catch((err)=>{
        res.json(err)
      })
    })
  })
  .catch((err)=>{
    res.json(err)
})
})


//:brewery -> breweries/create

//Create a brewery
breweryRouter.post('/breweries/create', (req, res, next) => {
console.log('-=-=-=-=-=-=-=-=-=-',req.body)
  Brewery.create({
    name: req.body.name,
    location: [{address: req.body.address, zip:req.body.zip}]
  })
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err)
  })
})




module.exports = breweryRouter;
