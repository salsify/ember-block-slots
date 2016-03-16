import Ember from 'ember';

// TODO ember-prop-types?  Mixin? initializer to re-open Component?
export default Ember.Component.extend({
  header: { title: 'HEADER' },
  footer: { title: 'FOOTER' },
  body: { title: 'BODY' },
  slots: Ember.Object.create({}),

  _registerSlot(name) {
    this.slots.set(name, true);
  },
});
