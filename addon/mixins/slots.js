import Ember from 'ember'
const {
  Mixin
} = Ember

/**
 * A convenience mixin that provides the necessary interface
 * to activate and deactivate a yield-slot/block-slot pairing
 */
export default Mixin.create({
  _slots: Ember.A(),

  _activateSlot (name) {
    this._slots.addObject(name)
  },

  _deactivateSlot (name) {
    this._slots.removeObject(name)
  }
})
