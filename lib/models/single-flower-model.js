(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');

  // export this model
  module.exports = Backbone.Model.extend({
    'defaults': {
      'color': 'pink',
      'img': 'images/placeholder.jpg'
    }
  });
 }());
