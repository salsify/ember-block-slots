import Ember from 'ember'

/**
 * @typedef {Object} ParameterObject
 * @property {ember/Array} params A property to hold the list of parameters
 */

/**
 * Creates an object with a propery set to an array of the values passed in.
 *
 * @function
 * @param {Array} params Values to add to the object's property
 * @returns {ParameterObject} The parameter values set as an array on the params property
 */
export function blockParams (params/*, hash*/) {
  return {
    params: Ember.A(params)
  }
}

export default Ember.Helper.helper(blockParams)
