//import Ember from 'ember'
//import layout from '../templates/components/block-slot'
//
//export default Ember.Component.extend({
//  layout
//})

import Ember from 'ember';
import layout from '../templates/components/block-slot'

const {
  assert,
  Component,
  computed
  } = Ember;

const component = Component.extend({
  layout,
  tagName: '',

  name: '',

  // TODO error if slot length is greater than 6
  slot: null,
  register: null,

  shouldDisplay: computed('name', 'slot.name', function() {
    return this.get('name') === this.get('slot.name');
  }),

  p1: computed('slot.params.[]', function() {
    return this.get('slot.params').objectAt(0);
  }),

  p2: computed('slot.params.[]', function() {
    return this.get('slot.params').objectAt(1);
  }),

  p3: computed('slot.params.[]', function() {
    return this.get('slot.params').objectAt(2);
  }),

  p4: computed('slot.params.[]', function() {
    return this.get('slot.params').objectAt(3);
  }),

  p5: computed('slot.params.[]', function() {
    return this.get('slot.params').objectAt(4);
  }),

  init() {
    this._super();
    assert("You must include a name for your block", this.name);
    this.slot.register(this.name);
  }
});

component.reopenClass({
  positionalParams: ['slot', 'name']
});

export default component;
