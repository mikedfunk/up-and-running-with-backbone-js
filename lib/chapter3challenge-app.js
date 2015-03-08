(function() {
  'use strict';

  var AllFlowersCollection = require('./collections/all-flowers');
  var SingleFlowerModel = require('./models/single-flower-model');
  var AllFlowersView = require('./views/all-flowers-view');

  var wash = new SingleFlowerModel({
    state: "Washington",
    flower: "Rhododendron macrophyllum",
    price: 'free'
  });

  var ore = new SingleFlowerModel({
    state: "Oregon",
    flower: "Oregon Grape",
    price: 'free'
  });

  var allFlowersCollection = new AllFlowersCollection([wash, ore]);

  var allFlowersView = new AllFlowersView({collection: allFlowersCollection});
  $('#state-flowers').append(allFlowersView.render().el);
}());
