var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ServiceSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, 
    title: {type: String, required: true},
    price: {type: String, required: true},
    duration:{type: Number}
  }
);

//Export model
module.exports = mongoose.model('Service', ServiceSchema);