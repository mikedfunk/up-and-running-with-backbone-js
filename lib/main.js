(function() {
  'use strict';

  // get dependencies
  var $ = require('jquery');
  var singleFlowerModel = require('./models/single-flower-model');

  var redRoses = new singleFlowerModel({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
  });

  var rainbowRoses = new singleFlowerModel({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
  });

  var heirloomRoses = new singleFlowerModel({
    name: "Heirloom Roses",
    price: 19.95,
    img: 'images/heirloomRoses.jpg',
    link: "heirloomRose"
  });

  console.log(redRoses.toJSON());
  console.log(rainbowRoses.toJSON());
  console.log(heirloomRoses.toJSON());

}());
