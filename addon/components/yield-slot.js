import Ember from 'ember'
import layout from '../templates/components/yield-slot'

const {
  assert,
  Component,
  computed
} = Ember

/**
 * @module
 * @augments ember/Component
 */
const component = Component.extend({

  /** @type {Object} */
  layout,

  /** @type {String} */
  tagName: '',

  /** @type {?String} */
  name: null,

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
    assert('You must include a name for your slot', this.name)

    this.set('_slots', this.parentView._slots)
  },

  /**
   * Used to determine whether a slot "block section" has been set or to use the default
   *
   * @function
   * @returns {Boolean}
   */
  isSlotActive: computed('_slots', 'name', function () {
    return this.get(`_slots.${this.get('name')}`)
  }),

  /**
   * Registers a slot "block section"
   *
   * @private
   * @param {String} name The name of the slot "block section"
   * @returns {undefined}
   */
  // TODO can we find a way to remove this?
  _registerSlot (name) {
    this.parentView._registerSlot(name)
  }
})

/**
 * @memberof ember/Component#
 */
component.reopenClass({

  /**
   * @type {Array}
   * @default name
   */
  positionalParams: [ 'name' ]
})

export default component
