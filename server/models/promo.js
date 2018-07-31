const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const promoSchema = new Schema({
  name: String,
  duration: String,
  brewery: {type: Schema.Types.ObjectId, ref: "Brewery"},
  description: String,
  promoCode: String
})


const Promotion = mongoose.model('Promotion', promoSchema)


module.exports = Promotion;