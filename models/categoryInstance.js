var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategoryInstanceSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, 
    status: {type: String, required: true, enum: ['Active', 'Inactive'], default: 'Active'}
  }
);


CategoryInstanceSchema
.virtual('url')
.get(function () {
  return '/category/categoryinstace/' + this._id;
});

//Export model
module.exports = mongoose.model('CategoryInstance', CategoryInstanceSchema);