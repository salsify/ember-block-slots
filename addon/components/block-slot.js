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

  shouldDisplay: computed('name', 'slot.name', function() {
//    return true
    return this.get('name') === this.get('slot.name');
  }),

  // TODO Should be able to have unlimited params
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
    this.parentView._registerSlot(this.name)
//    this.slot.register(this.name);
  }
});

component.reopenClass({
  positionalParams: ['slot', 'name']
});

export default component;
