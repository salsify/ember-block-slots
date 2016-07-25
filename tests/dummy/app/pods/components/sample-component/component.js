import Ember from 'ember'
import SlotsMixin from 'ember-block-slots'

export default Ember.Component.extend(SlotsMixin, {
  computedValue: Ember.computed('value', function () {
    const value = this.get('value')
    return `"${value}" is ${value.length} chars`
  }),

  actions: {
    internal () {
      window.alert('internal action')
    }
  }
})
