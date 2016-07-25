import Ember from 'ember'

export default Ember.Component.extend({
  attributeBindings: [
    'type',
    'value'
  ],
  tagName: 'input',
  type: 'button',
  value: 'Toggle conditional slot',

  click () {
    this.onClick()
  }
})
