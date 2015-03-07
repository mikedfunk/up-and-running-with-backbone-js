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
    className: "flowerListItem",

    // what template to use when displaying html somewhere, but where to
    // use this? that's in the render method
    template: _.template($('#flowerElement').html()),

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
    }
  });

}());
