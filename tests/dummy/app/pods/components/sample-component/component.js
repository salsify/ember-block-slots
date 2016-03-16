//import Ember from 'ember';
//import layout from './template';
//
//export default Ember.Component.extend({
//  layout
//});

import Ember from 'ember';

export default Ember.Component.extend({
  header: { title: 'HEADER' },
  footer: { title: 'FOOTER' },
  body: { title: 'BODY' },
  slots: null,

  _registerSlot(name) {
    this.slots.set(name, true);
  },

  init() {
    this._super();
    this.slots = this.slots || Ember.Object.create({});
  }
});
