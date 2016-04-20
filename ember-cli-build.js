/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-core/addon/styles'
      ]
    }
  })

  app.import('bower_components/highlightjs/styles/github.css')

  return app.toTree()
}
