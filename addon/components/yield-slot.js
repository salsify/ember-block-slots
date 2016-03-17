import Ember from 'ember';
import layout from '../templates/components/yield-slot'

const {
  assert,
  Component,
  computed,
  defineProperty
} = Ember

const component = Component.extend({
  layout,
  tagName: '',
  name: '', // TODO Necessary?

//  // TODO error if slot length is greater than 6, probably can remove this with a helper for the component template
  slot: null,

  init() {
    this._super()

    this.set('slots', this.parentView.slots)
  },

  isSlotActive: computed('slots', 'slot', function() {
    return this.get(`slots.${this.get('slot')}`)
  }),

  _registerSlot(name) {
    this.parentView._registerSlot(name)
  }
});

component.reopenClass({
  positionalParams: ['slot']
});

export default component;
