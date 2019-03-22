import { A } from '@ember/array';
import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

/**
 * A convenience mixin that provides the necessary interface
 * to activate and deactivate a yield-slot/block-slot pairing
 */
export default Mixin.create({
  _slots: computed(function() {
    return A();
  }),

  _activateSlot(name) {
    this._slots.addObject(name);
  },

  _deactivateSlot(name) {
    this._slots.removeObject(name);
  },
  _isRegistered(name) {
    return this._slots.includes(name);
  }
});
