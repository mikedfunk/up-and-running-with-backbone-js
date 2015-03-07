// the view for the flower collection for all flowers
(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');
  // backbone didn't have a jquery child element attached! It needs it!
  Backbone.$ = require('jquery');
  var SingleFlowerView = require('./single-flower-view');

  // export the module
  module.exports = Backbone.View.extend({
    tagName: 'section',
    render: function () {

      // will attach the collection in the next movie
      // addFlower gets called for every model instance in the collection
      // the last one is the context
      this.collection.each(this.addFlower, this);

      // for chaining
      return this;
    },

    // used by the backbone view render method
    addFlower: function (flower) {

      // the view instance must have a model assigned to it
      // this is the single flower row view
      var flowerView = new SingleFlowerView({model: flower});

      // $el is the jquery element so append is a jquery method
      // flowerView is the backbone view populated with a single flower model
      // the .el is from line 19 where it returns itself - the jquery element
      this.$el.append(flowerView.render().el);
    }
  });

}());
