import Ember from 'ember';

export function slot(params/*, hash*/) {
  return {
    params: Ember.A(params)
  }
}

export default Ember.Helper.helper(slot);
