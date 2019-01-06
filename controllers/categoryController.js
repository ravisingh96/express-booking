const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var Category = require('../models/category');


exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Categorys.
exports.category_list = function(req, res) {
    Category.find(function (err, category) {
        if (err) return next(err);
        res.send(category);
    })
};

// Display detail page for a specific Category.
exports.category_detail = function(req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (err) return next(err);
        res.send(category);
    })
};
 
// Display Category create form on GET.
exports.category_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category create GET');
};

// Handle Category create on POST.


exports.category_create_post = [
  
    // Validate fields.
    body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
    body('description', 'Description must not be empty.').isLength({ min: 1 }).trim(),
  
    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Book object with escaped and trimmed data.
        var category = new Category(
          { title: req.body.title,
            description: req.body.description,
           });

        if (!errors.isEmpty()) {
             res.json({errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid. Save book.
            category.save(function (err) {
                if (err) { return next(err); }
                res.json({success: 'Category Created successfully'});
                });
        }
    }
];

// Display Category delete form on GET.
exports.category_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category delete GET');
};

// Handle Category delete on POST.
exports.category_delete_post = function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

// Display Category update form on GET.
exports.category_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category update GET');
};

// Handle Category update on POST.
exports.category_update_post = function(req, res) {
    Category.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, category) {
        if (err) return next(err);
        res.send('Category udpated.');
    });
};