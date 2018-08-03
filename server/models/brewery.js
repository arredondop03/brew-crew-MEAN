const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  site: String,
  beersList: [{type: Schema.Types.ObjectId, ref: 'Beer'}],
  hours: String,
});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
