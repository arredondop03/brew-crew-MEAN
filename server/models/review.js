const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema =  new Schema({
  author: {type: Schema.Types.ObjectId, ref: "User"},
  review: String,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  belongsTo: {type: Schema.Types.ObjectId},

},
  {timestamps: true}
);

const Review = mongoose.model('Review', reviewSchema)



module.exports = Review;
