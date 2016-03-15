/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'block-slot',
  'Integration: BlockSlotComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#block-slot}}
      //     template content
      //   {{/block-slot}}
      // `);

      this.render(hbs`{{block-slot}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
