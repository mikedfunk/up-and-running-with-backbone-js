(function() {
  'use strict';

  // get dependencies
  var Backbone = require('backbone');

  // return our routes
  module.exports = Backbone.Router.extend({
    // these map to internal methods
    routes: {
      // root route
      "": "noCopy",
      "heirloomRose": "heirloomRoseMessage",
      "rainbowRose": "rainbowRoseMessage",
      "redRose": "redRoseMessage"
    },

    // the internal methods mapped from above
    noCopy: function () {
      $('#copy').html('');
    },

    heirloomRoseMessage: function () {
      $('#copy').html('heirloom roses are great mother\'s day flowers');
    },

    rainbowRoseMessage: function () {
      $('#copy').html('choose rainbow roses for your wedding');
    },

    redRoseMessage: function () {
      $('#copy').html('on valentine\'s day, give that special someone red roses');
    }
  });
}());
