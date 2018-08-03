const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema =  new Schema({
<<<<<<< HEAD
  author : String, //{type: Schema.Types.ObjectId}
  review: String,
  // rating: {
  //   type: Number,
  //   enum: [1, 2, 3, 4, 5]
  // },
  // belongsTo: [{type: Schema.Types.ObjectId}],
  
=======
  author : {type: Schema.Types.ObjectId, ref: "User"},
  review: String,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  belongsTo: {type: Schema.Types.ObjectId},

>>>>>>> 8f153afff5580b255b784a14f6a79a271d6f29b7
},
  {timestamps: true}
);

const Review = mongoose.model('Review', reviewSchema)



module.exports = Review;
<<<<<<< HEAD




=======
>>>>>>> 8f153afff5580b255b784a14f6a79a271d6f29b7
