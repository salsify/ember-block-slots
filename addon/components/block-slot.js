import Ember from 'ember'
const {
  assert,
  Component,
  computed,
  defineProperty,
  isPresent,
  on
} = Ember
import layout from '../templates/components/block-slot'
import YieldSlot from './yield-slot'

/**
 * @module
 * @augments ember/Component
 */
const component = Component.extend({

  // /** @type {Object} */
  layout,

  // /** @type {String} */
  tagName: '',

  // /** @type {String} */
  // name: null,

  // /** @type {?Object} */
  // yieldedSlot: null,

  // /**
  //  * Whether this slot should be yielded
  //  *
  //  * @function
  //  * @returns {Boolean}
  //  */
  // isTargetSlotYielding: computed('name', 'yieldedSlot.name', function () {
  //   return this.get('name') === this.get('yieldedSlot.name')
  // }),

  // // TODO In order to match the standard block params syntax we need
  // // to be able to pass a spread of positional params to the yield
  // // https://github.com/wycats/handlebars.js/pull/1149
  // //
  // // Until then we either have to use a hash, which changes the block
  // // param syntax for the slots, or a finite number of params passed
  // // directly to the yield, which is what we've opted for since it
  // // maintains the block param syntax

  // /**
  //  * The first parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p0: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(0)
  // }),

  // /**
  //  * The second parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p1: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(1)
  // }),

  // /**
  //  * The third parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p2: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(2)
  // }),

  // /**
  //  * The fourth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p3: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(3)
  // }),

  // /**
  //  * The fifth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p4: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(4)
  // }),

  // /**
  //  * The sixth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p5: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(5)
  // }),

  // /**
  //  * The seventh parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p6: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(6)
  // }),

  // /**
  //  * The eighth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p7: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(7)
  // }),

  // /**
  //  * The ninth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p8: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(8)
  // }),

  // /**
  //  * The tenth parameter of the yield
  //  *
  //  * @function
  //  * @returns {Array|Boolean|Object|String}
  //  */
  // p9: computed('yieldedSlot.params.[]', function () {
  //   return this.get('yieldedSlot.params').objectAt(9)
  // }),


  _init: on('init', function() {
    const yieldSlot = this.nearestOfType(YieldSlot)
    if (!yieldSlot) {
      this.nearestWithProperty('_slots')._registerSlot(this.name)
    } else {
      this.set('yieldSlot', yieldSlot)
      const isTargetSlotYielding = yieldSlot.name === this.name
      this.set('isTargetSlotYielding', isTargetSlotYielding)
      if (isTargetSlotYielding && isPresent(yieldSlot.blockParams)) {
        yieldSlot.blockParams.forEach((param, index) => {
          defineProperty(this, `p${index}`,
            computed.readOnly(`yieldSlot.blockParams.${index}`)
          )
        })
      }
    }
  })


  // /**
  //  * init event hook
  //  *
  //  * @returns {undefined}
  //  */
  // init () {
  //   this._super(...arguments)
  //   this.componentInit()
  // },

  // /**
  //  * Verifies a name property is passed in and sets up the initial state
  //  *
  //  * @returns {undefined}
  //  */
  // componentInit () {
  //   assert('You must include a name for your block', this.name)

  //   // TODO Keep an eye on this https://github.com/emberjs/ember.js/issues/11170
  //   // We're using parentView to avoid passing register on each yield slot,
  //   // maybe a helper can handle this?
  //   this.parentView._registerSlot(this.name)
  // }
})

/**
 * @memberof ember/Component#
 */
component.reopenClass({

  /**
   * @type {Array}
   * @default yieldedSlot, name
   */
  positionalParams: [ 'name' ]
})

export default component
