import Ember from 'ember'

export default Ember.Component.extend({
  sampleObject: {
    data: 'DATA'
  },

  // TODO make _slots and _registerSlot part of a mixin or initializer and use ember-prop-types
  _slots: Ember.Object.create({}),

  _registerSlot (name) {
    this._slots.set(name, true)
  }
})
