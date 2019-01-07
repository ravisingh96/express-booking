var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport')(passport);

// Require controller modules.
var category_controller = require('../controllers/categoryController');
var service_controller = require('../controllers/serviceController');
var categoryInstance_controller = require('../controllers/categoryInstanceController');

/// CATEGORY ROUTES ///

// GET catalog home page.
router.get('/', category_controller.index);

// GET request for creating a Category. NOTE This must come before routes that display Category (uses id).
router.get('/category/create', category_controller.category_create_get);

// POST request for creating Category.
router.post('/category/create', category_controller.category_create_post);

// GET request to delete Category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete Category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update Category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update Category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one Category.
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all Category items.
router.get('/categorys', passport.authenticate('jwt', { session: false}), category_controller.category_list);

/// SERVICE ROUTES ///

// GET request for creating Service. NOTE This must come before route for id (i.e. display service).
router.get('/service/create', service_controller.service_create_get);

// POST request for creating Service.
router.post('/service/create', service_controller.service_create_post);

// GET request to delete Service.
router.get('/service/:id/delete', service_controller.service_delete_get);

// POST request to delete Service.
router.post('/service/:id/delete', service_controller.service_delete_post);

// GET request to update Service.
router.get('/service/:id/update', service_controller.service_update_get);

// POST request to update Service.
router.post('/service/:id/update', service_controller.service_update_post);

// GET request for one Service.
router.get('/service/:id', service_controller.service_detail);

// GET request for list of all Services.
router.get('/services', service_controller.service_list);

/// CATEGORY INSTANCE ROUTES ///

// GET request for creating a CategoryInstance. NOTE This must come before route that displays CategoryInstance (uses id).
router.get('/categoryinstance/create', categoryInstance_controller.categoryInstance_create_get);

// POST request for creating CategoryInstance. 
router.post('/categoryinstance/create', categoryInstance_controller.categoryInstance_create_post);

// GET request to delete CategoryInstance.
router.get('/categoryinstance/:id/delete', categoryInstance_controller.categoryInstance_delete_get);

// POST request to delete CategoryInstance.
router.post('/categoryinstance/:id/delete', categoryInstance_controller.categoryInstance_delete_post);

// GET request to update CategoryInstance.
router.get('/categoryinstance/:id/update', categoryInstance_controller.categoryInstance_update_get);

// POST request to update CategoryInstance.
router.post('/categoryinstance/:id/update', categoryInstance_controller.categoryInstance_update_post);

// GET request for one CategoryInstance.
router.get('/categoryinstance/:id', categoryInstance_controller.categoryInstance_detail);

// GET request for list of all CategoryInstance.
router.get('/categoryinstances', categoryInstance_controller.categoryInstance_list);

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

module.exports = router;