const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const reviewSchema =  new Schema({
  author : String, //{type: Schema.Types.ObjectId}
  review: String,
  // rating: {
  //   type: Number,
  //   enum: [1, 2, 3, 4, 5]
  // },
  // belongsTo: [{type: Schema.Types.ObjectId}],
  
},
  {timestamps: true}
);

const beerSchema = new Schema({
  name: String,
  brewery: {type: Schema.Types.ObjectId, ref: "Brewery"},
  description: String,
  alchContent: String,
  price: String,
  review:  [{type: reviewSchema }]
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;



