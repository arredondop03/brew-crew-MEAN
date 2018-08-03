const express     = require('express');
const router      = express.Router();
const Review      = require ('../models/review');
const User          = require('../models/user')
const Brewery       = require('../models/brewery');

router.get('/breweries/review', (req, res, next)=>{
  Brewery.findById(req.user.favBreweries[0])
  .then((theBrewery)=>{
    res.json(theBrewery.review);
  })

  .catch((err)=>{
    next(err);
  });
});

//All reviews for that beer
router.get('/review', (req, res, next)=>{
  Review.find()
  .then((allBeerReviews)=>{
    res.json(allBeerReviews);
  })
  .catch((err)=>{
    next(err);
  });
});

//Create a review for that beer
router.post('beers/:id/review/create', (req, res, next)=>{
  const newReview = new Review({
    author: req.user._id,
    review: req.body.review,
    rating: req.body.rating,
    belongsToBeer: req.params.id
  })
  newReview.save()
  .then((newReview)=>{
    Beer.findById(req.params.id)
    // Review.findById(newReview.review)
    .then(thatBeerFromDb => {
      thatBeerFromDb.review.push(newReview._id);
      thatBeerFromDb.save();
      res.status(200).json(thatBeerFromDb)
    });
    res.json(response);
  })
  .catch((err)=>{
    res.json(err)
  })
})

//Edit your review

router.post('/beers/:id/review/:reviewid/edit', (req, res, next)=>{
  const id = req.params.id;

  Review.findByIdUpdate(id, {
    review: req.body.review,
    rating: req.body.rating
  })
  .then((theReview)=>{
    res.json(theReview);
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
