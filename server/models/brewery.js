const mongoose = require('mongoose');
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




const brewerySchema = new Schema({
  name: String,
  address: String,
  zip: String,
  city: String,
  phone: String,
  site: String,
  beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}],
  review: [{type: reviewSchema }],
  promotion: {type: Schema.Types.ObjectId},
  hours: String,
  // coverCharge: String

});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
