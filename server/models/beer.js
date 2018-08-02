const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const beerSchema = new Schema({
  name: String,
  brewery: [
    {
      breweryId: {
        type: Schema.Types.ObjectId, ref: "Brewery"
      }
    }
  ],
  description: String,
  alchContent: String,
  price: String,
  review: {type: Schema.Types.ObjectId, ref: "Review"}
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;

//5b6314ef36f3bc23999cf06f
//beer

//5b631ac22686fd2c02592be8
//brewery