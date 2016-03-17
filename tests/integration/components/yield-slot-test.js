/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'yield-slot',
  'Integration: YieldSlotComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#yield-slot}}
      //     template content
      //   {{/yield-slot}}
      // `);

      this.render(hbs`{{yield-slot 'name'}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
