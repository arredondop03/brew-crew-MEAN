const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const USERROLES = ["admin", "brewery", "user"];

const userSchema = new Schema({
  email: {type: String},
  password: String,
  username: {type: String},
  beerList:[{type: Schema.Types.ObjectId}],
  favBreweries:[{type: Schema.Types.ObjectId}],
  role: {type:String, enum: USERROLES },
  reviews: [{type: Schema.Types.ObjectId}],
  userImage: String,
  barCrawlLoc:[{type: Schema.Types.ObjectId}]
},{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
