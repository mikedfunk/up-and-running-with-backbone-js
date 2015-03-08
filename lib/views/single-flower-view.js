// the view for a single model view, which is one flower
// this is the view for one *row*, not just a flower on a page.
(function() {
  'use strict';

  // import dependencies
  var Backbone = require('backbone');
  var _ = require('underscore');

  // this is the return of the module
  module.exports = Backbone.View.extend({

    // defines which html tag my single model data should be placed in.
    // Optional. If you didn't define this, backbone would automatically
    // create a div tag.
    tagName: "article",

    // any page classes that my article tag should have in case I want to
    // apply some css. Optional but best practice.
    className: "flower-list-item",

    // what template to use when displaying html somewhere, but where to
    // use this? that's in the render method
    template: _.template($('#flower-element').html()),

    // where to apply the template and how
    render: function () {

      // populate the template with data
      var flowerTemplate = this.template(this.model.toJSON());

      // apply the filled template to the defined html tag
      // $el is the jquery element defined above. In this case it's
      // $('article.flowerListItem') so you can chain stuff off of it
      this.$el.html(flowerTemplate);

      // for chainability
      return this;
    },

    // some example events. This is part of Backbone core. Click events are
    // different - they're handled through routers.
    events: {
      'mouseover': 'addBgColor',
      'mouseout': 'removeBgColor'
    },

    addBgColor: function() {
      // $el is the jquery root element - the article tag
      this.$el.addClass('bg-color-image');
    },

    removeBgColor: function() {
      this.$el.removeClass('bg-color-image');
    }
  });

}());
