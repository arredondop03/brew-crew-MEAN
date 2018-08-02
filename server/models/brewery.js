const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  address: {
    type: String,
    required: [true, 'address is required']
  },
  city: {
    type: String,
    required: [true, 'city is required']
  },
  state: {
    type: String,
    required: [true, 'state is required']
  },
  zip: {
    type: String,
    required: [true, 'zipcode is required']
  },
  phone: {
    type: String,
    required: [true, 'phone is required']
  },
  site: {
    type: String,
  },
  beers: [
    {
      beerId: {
        type: Schema.Types.ObjectId,
        ref: 'Beer'
      }
    }
  ],
  promotion: {
    type: String,
  },
  hours: {
    type: String,
    required: [true, 'hours are required']
  },
});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
