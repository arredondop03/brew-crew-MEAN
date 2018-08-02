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
  .populate('beer')
  .then((breweryFromDB)=>{
     res.json(breweryFromDB)
  })
  .catch((err)=>{
    res.json(err)
  });
});

//beers
// breweryRouter.get('/breweries/:id', (req, res, next)=>{
//   Beer.find()
//   .then((allTeBeers)=>{
//     res.json(allTeBeers)
//   })
//   .catch((err)=>{
//     res.json(err)
//   });
// });

//Create a brewery
breweryRouter.post('/breweries/create', (req, res, next) => {
  Brewery.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone: req.body.phone,
    site: req.body.site,
    hours: req.body.hours,
  })
  .then((response) => {
    res.json(response)
  })
  .catch((err)=> {
    res.json(err);
    //populate
//populate
  });
});


//view brewery details
breweryRouter.get('/breweries/:id', (req, res , next)=>{
  Brewery.findById(req.params.id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err)
  })
})

//edit a brewery
breweryRouter.post('/breweries/:id/edit', (req, res, next)=>{
  Brewery.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    phone: req.body.phone,
    site: req.body.site,
    beers: req.body.beers,
    promotion: req.body.promotion,
    hours: req.body.hours,
    coverCharge: req.body.coverCharge
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
  Brewery.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.json(response);
  })
  .catch((err)=>{
    next(err);
  });
});




module.exports = breweryRouter;
