(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');
  var singleFlowerModel = require('../models/single-flower-model');

  // export a new collection
  module.exports = Backbone.Collection.extend({
    model: singleFlowerModel
  });
 }());
