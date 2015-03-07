# WIP

learning backbone with [this lynda series](http://www.lynda.com/Backbonejs-tutorials/Watching-model-changes/163089/177152-4.html)

## Installation
* `npm install`
* `./node_modules/jspm/jspm.js install`
* browse to index.html

## Backbone Notes

* `initialize` can be used to watch for changes to a model and persist it when it is changed
* to create a collection, you first must tell it which model it's based on. I guess that means you can only make collections of the same type of model.
* a collection must be (1) defined with the model it uses (2) instantiated and then (3) add models to it
* you can use [Backbone.Sync()](http://backbonejs.org/#Sync) to use `$.ajax` to persist data when it has changed, been removed, etc. Cool!
