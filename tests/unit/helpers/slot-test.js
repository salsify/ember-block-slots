/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  slot
} from 'ember-block-slots/helpers/slot';

describe('SlotHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = slot(42);
    expect(result).to.be.ok;
  });
});
