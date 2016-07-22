import Ember from 'ember';

export default Ember.Controller.extend({
  controllerProperty: 'controller property',

  actions: {
    updateControllerProperty() {
      this.set('controllerProperty', 'new controller property value')
    }
  }
});
