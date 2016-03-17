import Ember from 'ember'
import layout from '../templates/components/yield-slot'

const {
  assert,
  Component,
  computed
} = Ember

const component = Component.extend({
  layout,
  tagName: '',

  name: null,

  init () {
    this._super()

    assert('You must include a name for your slot', this.name)

    this.set('_slots', this.parentView._slots)
  },

  isSlotActive: computed('_slots', 'name', function () {
    return this.get(`_slots.${this.get('name')}`)
  }),

  // TODO can we find a way to remove this?
  _registerSlot (name) {
    this.parentView._registerSlot(name)
  }
})

component.reopenClass({
  positionalParams: ['name']
})

export default component
