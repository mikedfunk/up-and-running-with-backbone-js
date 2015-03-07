(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');
  var singleFlowerModel = require('../models/single-flower-model');

  // return our collection
  module.exports = Backbone.Collection.extend({
    model: singleFlowerModel,
    initialize: function () {

      // when it changes, log it
      this.on('change', function () {
        console.log('the euro flowers collection has changed!');
      });
    }
  });
 }());
