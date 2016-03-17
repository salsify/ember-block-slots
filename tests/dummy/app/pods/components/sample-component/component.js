import Ember from 'ember';

// TODO ember-prop-types?  Mixin? initializer to re-open Component?
export default Ember.Component.extend({
  sampleObject: {
    data: 'DATA'
  },

  slots: Ember.Object.create({}),

  _registerSlot(name) {
    this.slots.set(name, true);
  },
});
