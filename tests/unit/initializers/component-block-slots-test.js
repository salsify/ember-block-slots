/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it,
  beforeEach
} from 'mocha'
import Ember from 'ember'
import { initialize } from 'ember-block-slots/initializers/component-block-slots'

describe('ComponentBlockSlotsInitializer', function () {
  let container, application

  beforeEach(function () {
    Ember.run(function () {
      application = Ember.Application.create()
      container = application.__container__
      application.deferReadiness()
    })
  })

  // Replace this with your real tests.
  it('works', function () {
    initialize(container, application)

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok
  })

  it('"_slots" property is added to the base Component object', function () {
    initialize(container, application)

    const newComponent = Ember.Component.create()

    expect(newComponent._slots).to.be.an('object')
  })

  it('"_registerSlot()" is added to the base Component object', function () {
    initialize(container, application)

    const newComponent = Ember.Component.create()

    expect(newComponent._registerSlot).to.be.a('function')
  })

  it('"_registerSlot()" sets "_slots.name" to "true"', function () {
    initialize(container, application)

    const newComponent = Ember.Component.create()

    newComponent._registerSlot('testName')

    expect(newComponent._slots.testName).to.be.ok
  })
})
