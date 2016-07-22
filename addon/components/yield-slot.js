import Ember from 'ember'
import layout from '../templates/components/yield-slot'

const {
  Component,
  computed,
  on
} = Ember

const component = Component.extend({
  layout,
  tagName: '',

  isActive: computed('parentView._slots.[]', 'name', function () {
    return this.get('parentView._slots').contains(this.get('name'))
  })
})

component.reopenClass({
  positionalParams: [ 'name', 'blockParams' ]
})

export default component
