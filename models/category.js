var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true}
  }
);

// Virtual for book's URL
CategorySchema
.virtual('url')
.get(function () {
  return '/category/' + this._id;
});

//Export model
module.exports = mongoose.model('Category', CategorySchema);