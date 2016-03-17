import Ember from 'ember'

export function blockParams (params/*, hash*/) {
  return {
    params: Ember.A(params)
  }
}

export default Ember.Helper.helper(blockParams)
