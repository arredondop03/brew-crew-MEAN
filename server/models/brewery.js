const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  name: String,
  address: String,
  zip: String,
  city: String,
  phone: String,
  site: String,
  beers: [
    {
      beerId: {
        type: Schema.Types.ObjectId, ref: 'Beer'
      }
    }
  ],
  promotion: String,
  hours: String,
  coverCharge: String
});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
