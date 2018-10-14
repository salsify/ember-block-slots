import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Component from '@ember/component';
import SlotsMixin from 'ember-block-slots/mixins/slots';

module('Integration | Component | yield-slot', function (hooks) {
  setupRenderingTest(hooks);

  test(`inverse slot yields`, async function (assert) {

    this.owner.register('component:my-yield-component', Component.extend(SlotsMixin, {
      init() {
        this._super(...arguments);
        this.set('value', A(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']));
      },
      layout: hbs`
        {{yield}}
        {{#yield-slot "main" value}}
          {{yield}}
        {{else}}
           Nothing to see here...
        {{/yield-slot}}
      `
    }));

    this.owner.register('component:my-component', Component.extend({
      layout: hbs`
        {{#my-yield-component}}
        {{/my-yield-component}}
      `
    }));

    await render(hbs`{{my-component}}`);

    assert.equal(
      this.element.textContent.trim(), 'Nothing to see here...');
  });
});
