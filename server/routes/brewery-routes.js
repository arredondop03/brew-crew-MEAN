const express       = require('express');
const breweryRouter = express.Router();
const Beer          = require('../models/beer');
const Brewery       = require('../models/brewery');
const mongoose      = require('mongoose');
const User          = require('../models/user');

// All breweries
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
  .populate('beer.beerId')
  .then((breweryFromDB)=>{
     res.json(breweryFromDB)
  })
  .catch((err)=>{
    res.json(err)
  });
});

//Create a brewery
breweryRouter.post('/breweries/create', (req, res, next) => {
  const newBrewery = new Brewery({
    name: req.body.name,
    address: req.body.address,
    city:    req.body.city,
    state:   req.body.state,
    zip:     req.body.zip,
    phone: req.body.phone,
    site: req.body.site,
    hours: req.body.hours,
    beers: req.body.beers
  })
  newBrewery.save()
  .then((response)=>{
    console.log(response)
    User.findById(req.user._id)
      foundUser.myBrewery.unshift(response._id)
      console.log('Creating the User\'s Brewery..........',foundUser.myBrewery)
      foundUser.save()
      .then(()=>{
        res.json(response)
      })
      .catch(err => console.log(err))
      })
    .catch(err => res.json(err))
  });


//view brewery details
breweryRouter.get('/breweries/:id', (req, res , next)=>{
  Brewery.findById(req.params.id)
  .populate('Beer')
  .then((breweryFromDB)=>{
     res.json(breweryFromDB)
  })
  .catch((err)=>{
    res.json(err)
  });
});


//edit a brewery
breweryRouter.post('/breweries/:id/edit', (req, res, next)=>{
  Brewery.findByIdAndUpdate(req.params.id, {
    name:    req.body.name,
    address: req.body.address,
    city:    req.body.city,
    state:   req.body.state,
    zip:     req.body.zip,
    phone:   req.body.phone,
    site:    req.body.site,
    hours:   req.body.hours,
    beers:   req.body.beers
  })
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    next(err);
  });
});

//delete a brewery
breweryRouter.post('/breweries/:id/delete', (req, res, next)=>{
  Brewery.findById(req.params.id)
  .then((breweryFromDB)=>{
    Beer.remove({_id: {$in: breweryFromDB.beers}})
    .then((beerFromDB)=>{
      console.log('Results from DB from delete beer', beerFromDB)
      // if (beerFromDB === null) {
      //   res.status(400).json({message: "Beer not found"})
      // }
      // else {
      //   res.status(200).json(beerFromDB)
      // }
      Brewery.remove({_id: breweryFromDB._id})
      // res.status(200).json({message: "Nice it's goooone"})
      .then((brewFromDB)=>{
        console.log('Results from DB from delete brewery', brewFromDB)
        if (brewFromDB === null) {
          res.status(400).json({message: "Brewery not found"})
        }
        else {
          res.status(200).json(brewFromDB)
        }
      });
    });
  })
  .catch((err)=>{
    console.log("the error from deleting brewery", err)
    res.status(500).json({message: "nnnnoooooooooooo!"})
  })
});




module.exports = breweryRouter;
