import Ember from 'ember'
import layout from '../templates/components/block-slot'

const {
  assert,
  Component,
  computed,
  defineProperty
} = Ember

const blockParamsAllowed = 10

const component = Component.extend({
  layout,
  tagName: '',

  yieldedSlot: null,
  yieldedSlotName: computed.readOnly('parentView.slot'),

  isSlotYield: computed('name', 'yieldedSlotName', function () {
    return this.get('name') === this.get('yieldedSlotName')
  }),

  init () {
    this._super()

    assert('You must include a name for your block', this.name)

    // TODO Keep an eye on this https://github.com/emberjs/ember.js/issues/11170
    // We're using parentView to avoid passing register on each yield slot,
    // maybe a helper can handle this?
    this.parentView._registerSlot(this.name)

    // TODO In order to match the standard block params syntax we need
    // to be able to pass a spread of positional params to the yield
    // https://github.com/wycats/handlebars.js/pull/1149
    //
    // Until then we either have to use a hash, which changes the block
    // param syntax for the slots, or a finite number of params passed
    // directly to the yield, which is what we've opted for since it
    // maintains the block param syntax
    Array.from(Array(blockParamsAllowed).keys()).forEach((index) => {
      defineProperty(this, `p${index}`, computed(function () {
        return this.get('yieldedSlot.params').objectAt(index)
      }))
    })
  }
})

component.reopenClass({
  positionalParams: ['yieldedSlot', 'name']
})

export default component
