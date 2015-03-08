(function() {
  'use strict';

  // get dependencies
  var $ = require('jquery');
  var SingleFlowerModel = require('./models/single-flower-model');
  var AllFlowersCollection = require('./collections/all-flowers-collection');
  var EuropeanFlowers = require('./collections/european-flowers');
  var SingleFlowerView = require('./views/single-flower-view');
  var AllFlowersView = require('./views/all-flowers-view');
  var Backbone = require('backbone');
  var FlowerRouter = require('./flower-router');

  // set up some models based on the single flower model. That model has
  // default values for those that are not set below.
  var redRoses = new SingleFlowerModel({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
  });

  var rainbowRoses = new SingleFlowerModel({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
  });

  var heirloomRoses = new SingleFlowerModel({
    name: "Heirloom Roses",
    price: 19.95,
    img: 'images/heirloomPinkRoses.jpg',
    link: "heirloomRose"
  });

  var tantalizingTulips = new SingleFlowerModel({
    name: "Tantalizing Tulips",
    price: 17.95,
    color: "Mauve",
    link: "tulips"
  });

  // set a new key/value pair for origin country
  tantalizingTulips.set('originCountry', 'Holland');

  var fleurDeLis = new SingleFlowerModel({
    name: "Fleur De Lis",
    price: 23.95,
    color: "Blue",
    link: "fleur"
  });

  // log the json for each of our new models
  // console.log(redRoses.toJSON());
  // console.log(rainbowRoses.toJSON());
  // console.log(heirloomRoses.toJSON());

  // change the price of a flower to trigger the on('change') method
  // we have a listener there so we should get a console log
  // redRoses.set('price', 14.99);

  // instantiate our defined collection with our model instances
  var flowerGroup = new AllFlowersCollection([
    redRoses, rainbowRoses, tantalizingTulips, fleurDeLis
  ]);

  // instantiate a collection of just european ones with the EuropeanFlowers
  // collection type
  var europeanFlowers = new EuropeanFlowers([
    fleurDeLis, tantalizingTulips
  ]);

  // what does the european flowers collection consist of?
  // console.log('european flowers', europeanFlowers.toJSON());

  // add a one-off model instance to the already defined collection
  flowerGroup.add(heirloomRoses);

  // they can also be removed by matching instance
  // flowerGroup.remove(redRoses);

  // log the collection in readable format
  // console.log('all flowers', flowerGroup.toJSON());

  // instantiate the flower collection view and pass in a collection
  var flowerGroupView = new AllFlowersView({collection: flowerGroup});

  // apply the rendered view to the page
  $('#all-flowers').html(flowerGroupView.render().el);

  // instantiate the router and start backbone history so the back button
  // will work
  var flowerRouter = new FlowerRouter();
  Backbone.history.start();
}());
