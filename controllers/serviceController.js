const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var Service = require('../models/services');
var async = require('async');
var Category = require('../models/category');

// Display list of all Services.
// exports.service_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Service list');
// };
exports.service_list = function(req, res, next) {

    Service.find({}, 'title category')
      .populate('category')
      .exec(function (err, list_service) {
        if (err) { return next(err); }
        //Successful, so render
         res.json(list_service);
      });
      
  };

// Display detail page for a specific Service.
exports.service_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Service detail: ' + req.params.id);
};

// Display Service create form on GET.
exports.service_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Service create GET');
};

// Handle Service create on POST.

exports.service_create_post = [
  
    // Validate fields.
 
    body('category', 'Category must not be empty.').isLength({ min: 1 }).trim(),
    body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
    body('price', 'Price must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Book object with escaped and trimmed data.
        var service = new Service(
          { 
            category: req.body.category,
            title: req.body.title,
            price: req.body.price,
            duration: req.body.duration,
           });

        if (!errors.isEmpty()) {
             res.json({errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid. Save book.
            service.save(function (err) {
                if (err) { return next(err); }
                res.json({success: 'Service Created successfully'});
                });
        }
    }
];

// Display Service delete form on GET.
exports.service_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Service delete GET');
};

// Handle Service delete on POST.
exports.service_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Service delete POST');
};

// Display Service update form on GET.
exports.service_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Service update GET');
};

// Handle Service update on POST.
exports.service_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Service update POST');
};