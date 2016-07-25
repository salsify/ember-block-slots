/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import Ember from 'ember'
import SlotsMixin from 'ember-block-slots/mixins/slots'

describe('SlotsMixin', function () {
  // Replace this with your real tests.
  it('works', function () {
    let SlotsObject = Ember.Object.extend(SlotsMixin)
    let subject = SlotsObject.create()
    expect(subject).to.be.ok
  })
})
