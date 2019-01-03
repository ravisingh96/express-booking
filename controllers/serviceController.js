var Service = require('../models/services');

// Display list of all Services.
exports.service_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Service list');
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
exports.service_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Service create POST');
};

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