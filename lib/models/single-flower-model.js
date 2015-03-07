(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');

  // export this model for use in require (commonjs style)
  module.exports = Backbone.Model.extend({
    'defaults': {
      'color': 'pink',
      'img': 'images/placeholder.jpg'
    },
    // gets run every time a model is created
    // uses get() to get the property of a model
    'initialize': function () {
      console.log('A model instance named ' + this.get('name') + ' has been created and it costs ' + this.get('price'));

      // any time an instance of this model is changed
      // super useful for persisting to the db via ajax or whatever!
      this.on('change', function () {
        console.log('something in the model has changed');
      });

      // any time the price specifically is changed
      this.on('change:price', function () {
        console.log("the price for " + this.get('name') + " was changed to " + this.get('price'));
      });
    }
  });
}());
