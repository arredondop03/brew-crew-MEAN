const express       = require('express');
const breweryRouter = express.Router();
const Beer          = require('../models/beer');
const Brewery       = require('../models/brewery');
const User          = require('../models/user')
const mongoose      =require ('mongoose')


// All breweries
breweryRouter.get('/breweries', (req, res, next) => {
  Brewery.find()
  .populate('favBreweries')

    .then((allTheBreweries) => {
      res.json(allTheBreweries);
    })
    .catch((err)=> {
      res.json(err);
    });
});

// //One Brewery
// breweryRouter.get('/breweries/:id', (req, res, next)=>{
//   Brewery.findById(req.params.id)
//   .then((breweryFromDB)=>{
//     Beer.findById({_id: breweryFromDB.beers})
//     .then((beersFromDB)=>{
//       Review.findById({_id: beersFromDB.review})
//       .then((reviewFromDB)=>{
//         data = {
//           Brewery: breweryFromDB,
//           Beer: beersFromDB,
//           Review: reviewFromDB
//         }
//         res.json(data)
//       })
//       .catch((err)=>{
//         res.json(err)
//       })
//     })
//   })
//   .catch((err)=>{
//     res.json(err)
// })
// })



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
breweryRouter.get('/breweries/:id', (req, res, next)=>{
  Beer.find()
  .then((allTeBeers)=>{
    res.json(allTeBeers)
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
    city: req.body.city,
    zip: req.body.zip,
    phone: req.body.phone,
    site: req.body.site,

  })
  newBrewery.save()
  .then((response)=>{
    console.log(response)
    User.findById(req.user._id)
    .then(foundUser =>{
      foundUser.favBreweries.unshift(response._id)
      console.log('favBreweryy..........',foundUser.favBreweries)
      foundUser.save()
      .then(()=>{
        res.json(response)
      })
      .catch(err => console.log(err))
    })
    .catch(err => res.json(err))
  })

  .catch(err => res.json(err))
});


// Brewery.create({
//   name: req.body.name,
//   location: {
//     address: req.body.address,
//     city: req.body.city,
//     zip: req.body.zip
//   },
//   phone: req.body.phone,
//   site: req.body.site,
//   beers: req.body.beers,
//   promotion: req.body.promotion,
//   hours: req.body.hours,
//   coverCharge: req.body.coverCharge
// })
// .then((response) => {
//   res.json(response)
// })
// .catch((err)=> {
//   res.json(err);
// });

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
