import EmberObject from '@ember/object';
import { module, test } from 'qunit';
import SlotsMixin from '@salsify/ember-block-slots/mixins/slots';

module('Unit | Mixin | SlotsMixin', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let SlotsObject = EmberObject.extend(SlotsMixin);
    let subject = SlotsObject.create();
    assert.ok(subject);
  });
});
