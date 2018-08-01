const express     = require('express');
const router      = express.Router();
const Review      = ('../models/review.js');


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
router.post('/review/create', (req, res, next)=>{
  Review.create({
    review: req.body.review,
    rating: req.body.rating
  })
  .then((response)=>{
    res.json(response);
  })
  .catch((err)=>{
    res.json(err);
  });
});

//Edit your review
router.get('/review/:id/edit', (req, res, next)=>{
  const id = req.params.id;

  Review.findById(id)
  .then((theReview)=>{
    res.json(theReview);
  })
  .catch((err)=>{
    res.json(err);
  });
});

router.post('/review/:id/update', (req, res, next)=>{
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