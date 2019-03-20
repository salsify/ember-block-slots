import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Component from '@ember/component';
import SlotsMixin from 'ember-block-slots/mixins/slots';

module('Integration | Component | block-slot', function (hooks) {
  setupRenderingTest(hooks);

  test(`block-slot handles yielded values correctly`, async function (assert) {

    this.owner.register('component:my-yield-component', Component.extend(SlotsMixin, {
      init() {
        this._super(...arguments);
        this.set('value', A(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']));
      },
      layout: hbs`
        {{yield}}
        {{#yield-slot "main" value}}
          {{yield}}
        {{/yield-slot}}
      `
    }));

    this.owner.register('component:my-component', Component.extend({
      layout: hbs`
        {{#my-yield-component}}
          {{#block-slot "main" as |n0 n1 n2 n3 n4 n5 n6 n7 n8 n9|}}
            I am the numbers {{n0}} {{n1}} {{n2}} {{n3}} {{n4}} {{n5}} {{n6}} {{n7}} {{n8}} {{n9}}
          {{/block-slot}}
        {{/my-yield-component}}
      `
    }));

    await render(hbs`{{my-component}}`);

    assert.equal(
      this.element.textContent.trim(), 'I am the numbers 0 1 2 3 4 5 6 7 8 9');
  });

  test(`block-slot has no content when parent component does not yield`, async function (assert) {

    this.owner.register('component:my-yield-component', Component.extend(SlotsMixin, {
      layout: hbs`
        {{yield}}
        {{#yield-slot "main" value}}
          {{yield}}
        {{/yield-slot}}
      `
    }));

    this.owner.register('component:my-component', Component.extend({
      layout: hbs`
        {{#my-yield-component}}
          {{#block-slot "other" as |n0 n1 n2 n3 n4 n5 n6 n7 n8 n9|}}
            Rendered
          {{/block-slot}}
        {{/my-yield-component}}
      `
    }));

    await render(hbs`{{my-component}}`);

    assert.equal(
      this.element.textContent.trim(), '');
  });
});
