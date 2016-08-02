import Ember from 'ember'
const {
  Mixin,
  computed
} = Ember

/**
 * A convenience mixin that provides the necessary interface
 * to activate and deactivate a yield-slot/block-slot pairing
 */
export default Mixin.create({
  _slots: computed(function () {
    return Ember.A()
  }),

  _activateSlot (name) {
    this.get('_slots').addObject(name)
  },

  _deactivateSlot (name) {
    this.get('_slots').removeObject(name)
  }
})
