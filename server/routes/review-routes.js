const express     = require('express');
const router      = express.Router();
const Review      = require ('../models/review.js');
const User          = require('../models/user')
const Brewery       = require('../models/brewery');


// All reviews for that beer
// router.get('/breweries/review', (req, res, next)=>{
//   Brewery.findById(req.user.favBreweries[0])
  
//   .then((theBrewery)=>{
//     res.json(theBrewery.review);
//   })
  
//   .catch((err)=>{
//     next(err);
//   });
// });


//Create a review for that beer
router.post('/review/create', (req, res, next)=>{
  const newReview = {
    author: req.body.author,
    review: req.body.review
  }

  Brewery.findById(req.user.favBreweries[0])
  .then((theBrewery)=>{
    theBrewery.review.unshift(newReview)
    theBrewery.save()
    .then((response)=>{
      res.json(response)
    })
    .catch((err)=>{
      res.json(err)
    })
  })
  .catch((err)=>{
    res.json(err)
  })
})

//Edit your review
// router.get('/review/:id/edit', (req, res, next)=>{
//   const id = req.params.id;

//   Brewery.findById(req.user.favBreweries[0])
//   .then((theBrewery)=>{
//     const theReview = theBrewery.review
//   })
//   .catch((err)=>{
//     res.json(err);
//   });
// });

router.post('/breweries/review/:id/update', (req, res, next)=>{
  const id = req.params.id;

  Brewery.findByIdUpdate(id, {
    review: req.body.review,
    rating: req.body.rating
  })
  .then((theReview)=>{
    res.json('review' +theReview._id);
  })
  .catch((err)=>{
    res.json(err);
  });
});

//Delete said review
router.delete('/review/:id/remove', (req, res, next) => {
  const id = req.params.id;

  Review.findByIdAndRemove(id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  });
});

module.exports = router;