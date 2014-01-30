define([
  'underscore',
  'chaplin'
], function(_, Chaplin) {
  'use strict';

  // Application-specific utilities
  // ------------------------------

  // Delegate to Chaplin’s utils module
  var utils = Chaplin.utils.beget(Chaplin.utils)

  _(utils).extend({
    slice: Array.prototype.slice
  })

  return utils
})
