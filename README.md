Learning backbone with [this lynda series](http://www.lynda.com/Backbonejs-tutorials/Watching-model-changes/163089/177152-4.html)

## Installation
* `npm install`
* `./node_modules/jspm/jspm.js install`
* browse to `index.html`

## Backbone Notes

* `initialize` can be used to watch for changes to a model and persist it when it is changed
* to create a collection, you first must tell it which model it's based on. I guess that means you can only make collections of the same type of model.
* a collection must be (1) defined with the model it uses (2) instantiated and then (3) add models to it
* you can use [Backbone.Sync()](http://backbonejs.org/#Sync) to use `$.ajax` to persist data when it has changed, been removed, etc. Cool!
* models and collections can have an initialize property -> function. this can have an this.on('change') function and other stuff.
* using jspm it appears Backbone.$ is not automatically set up. I had to attach it in all-flowers-view.
* for routes to work you need to instantiate the route "class" extended from Backbone.Router. This happens in your app js. You also need to activate backbone history with `Backbone.history.start()`.

## Summary

* Created an app file in `lib/app.js`.
* Create an `index.html` file and fill it with some boilerplate html5. Put some js there to load jspm and load the `app.js` file. Add a div#all-flowers for the app to attach to.
* Created a single flower model in `lib/models/single-flower-model.js`. This lets you set defaults and define functions that happen on events (such as add, remove, change)
* Created a collection for flowers in `lib/collections/all-flowers-colleciton.js`. This just specifies what model goes in this collection, although you could define event listeners here.
* Instantiated several models in the app file with data. Some of the data falls back to the defaults.
* Passed these models in an array to instantiate a collection
* Created an underscore template in a `script[type="text/template"]` tag.
* Created a backbone view for a single flower in `lib/views/single-flower-view.js`. This is basically a sub-view for the collection view. It's one row in the list view. This:
 * Uses underscore to grab that template from index.html for a single flower and assign it to this view
 * Override the render function to populate this template with data from the model and add the result to the html element assigned to this view
* Created a backbone view for all flowers (the flower collection). This is mostly for adding a render function that passes each model in the collection to the single flower view. It then appends each rendered single flower to the collection element.
* Added some events to the single flower view. These call internal events when said event is triggered such as `mouseover`. These just toggle a css class as a demo.
* Added a router to demo routing in `lib/flower-router.js`. Very simple. Just defines some routes (anchor tags) and which internal method they call. These methods just set the inner html of a div.
* Also did a few other things such as a chapter 3 challenge which included a european flowers collection. It's nothing new though.
