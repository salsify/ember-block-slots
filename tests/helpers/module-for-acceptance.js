// import { module } from 'qunit'
import {
  describe,
  beforeEach, // eslint-disable-line no-unused-vars
  afterEach // eslint-disable-line no-unused-vars
} from 'mocha'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

export default function (name, options = {}) {
  // module(name, {
  describe(name, {
    beforeEach () {
      this.application = startApp()

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments)
      }
    },

    afterEach () {
      if (options.afterEach) {
        options.afterEach.apply(this, arguments)
      }

      destroyApp(this.application)
    }
  })
}
