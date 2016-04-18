import Ember from 'ember'
import layout from '../templates/components/block-slot'

const {
  assert,
  Component,
  computed,
  defineProperty
} = Ember

/**
 * The maximum allowed number of block parameters supported
 *
 * @memberof module:addon/components/block-slot
 * @constant {Number} blockParamsAllowed
 * @default 10
 */
const blockParamsAllowed = 10

/**
 * @module
 * @augments ember/Component
 */
const component = Component.extend({

  /** @type {Object} */
  layout,

  /** @type {String} */
  tagName: '',

  /** @type {String} */
  name: null,

  /** @type {?Object} */
  yieldedSlot: null,

  /**
   * The name of the parent component's slot "block section"
   *
   * @type {String}
   */
  yieldedSlotName: computed.readOnly('parentView.name'),

  /**
   * Whether this slot should be yielded
   *
   * @function
   * @returns {Boolean}
   */
  isSlotYield: computed('name', 'yieldedSlotName', function () {
    return this.get('name') === this.get('yieldedSlotName')
  }),

  /**
   * init event hook
   *
   * @returns {undefined}
   */
  init () {
    this._super()
    this.componentInit()
  },

  /**
   * Verifies a name property is passed in and sets up the initial state
   *
   * @returns {undefined}
   */
  componentInit () {
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

/**
 * @memberof ember/Component#
 */
component.reopenClass({

  /**
   * @type {Array}
   * @default yieldedSlot, name
   */
  positionalParams: [ 'yieldedSlot', 'name' ]
})

export default component
