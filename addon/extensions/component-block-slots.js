import Ember from 'ember'

const {
  Component
} = Ember

/**
 * @module
 */

/**
 * @memberof ember/Component#
 */
Component.reopen({

  /**
   * Used to contain an object with a name property for holding the slot's name
   *
   * @private
   * @type {ember/Object}
   */
  _slots: Ember.Object.create({}),

  /**
   * Registers a slot "block section" by name
   *
   * @private
   * @function
   * @param {String} name The name of the slot to register
   * @returns {undefined}
   */
  _registerSlot (name) {
    this._slots.set(name, true)
  }
})
