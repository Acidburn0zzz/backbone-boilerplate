define([
  'handlebars',
  'chaplin',
  'lib/utils'
], function(Handlebars, Chaplin, utils) {
  'use strict';

  // Application-specific Handlebars helpers
  // -------------------------------------------

  // Get Chaplin-declared named routes. {{#url "like" "105"}}{{/url}}.
  Handlebars.registerHelper('url', function(routeName) {
    var params = utils.slice.call(arguments, 1)
      , options = params.pop()
    return utils.reverse(routeName, params)
  })
})