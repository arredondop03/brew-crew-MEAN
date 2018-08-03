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
router.post('/review/:id/create', (req, res, next)=>{
  Review.create({
    author: req.user._id,
    review: req.body.review,
    rating: req.body.rating,
    belongsToBeer: req.params.id
  })
  .then((newReview)=>{
    Beer.findById(req.params.id)
    // Review.findById(newReview.review)
    .then(thatBeerFromDb => {
      thatBeerFromDb.review.push(newReview._id);
      thatBeerFromDb.save();
      res.status(200).json({
        review: newReview,
      })
    })
    res.json(response);
  })
  .catch((err)=>{
    res.json(err)
  })
})

//Edit your review

router.get('/review/:id/edit', (req, res, next)=>{
  const id = req.params.id;
  Brewery.findById(req.user.favBreweries[0])
  .then((theBrewery)=>{
    const theReview = theBrewery.review
  })
  .catch((err)=>{
    res.json(err);
  });
});


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
