var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ServiceSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, 
    title: {type: String, required: true},
    price: {type: Number, required: true},
    duration:{type: Number}
  }
);

// Virtual for author's URL
ServiceSchema
.virtual('url')
.get(function () {
  return '/category/service/' + this._id;
});

//Export model
module.exports = mongoose.model('Service', ServiceSchema);