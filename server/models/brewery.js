const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: String, required: true},
  phone: {type: String, required: true},
  site: {type: String, required: true},
  beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}],

  promotion: {type: Schema.Types.ObjectId},
  hours: {type: String, required: true},
  // coverCharge: String

});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
