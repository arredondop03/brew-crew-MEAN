const express     = require('express');
const reviewRouter      = express.Router();
const Review      = require('../models/review');


//All reviews for that beer
reviewRouter.get('/review', (req, res, next)=>{
  Review.find()
  .then((allBeerReviews)=>{
    res.json(allBeerReviews);
  })
  .catch((err)=>{
    next(err);
  });
});

//Create a review for that beer
reviewRouter.post('/review/:id/create', (req, res, next)=>{
  Review.create({
    author: req.user._id,
    review: req.body.review,
    rating: req.body.rating
  })
  .then((newReview)=>{
    Review.findById(newReview.review)
    .then(reviewFromDb => {
      reviewFromDb.reviews.push(newReview);
      reviewFromDb.save();
      res.status(200).json({
        review: newReview,

      })
    })
    res.json(response);
  })
  .catch((err)=>{
    res.json(err);
  });
});

//Edit your review
reviewRouter.get('/review/:id/edit', (req, res, next)=>{
  const id = req.params.id;

  Review.findById(id)
  .then((theReview)=>{
    res.json(theReview);
  })
  .catch((err)=>{
    res.json(err);
  });
});

reviewRouter.post('/review/:id/update', (req, res, next)=>{
  const id = req.params.id;

  Review.findByIdUpdate(id, {
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
reviewRouter.delete('/review/:id/remove', (req, res, next) => {
  const id = req.params.id;

  Review.findByIdAndRemove(id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  });
});

module.exports = reviewRouter;
