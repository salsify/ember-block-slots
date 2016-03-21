import Ember from 'ember'

const {
  Component,
} = Ember;

Component.reopen({
  _slots: Ember.Object.create({}),

  _registerSlot (name) {
    this._slots.set(name, true)
  }
});