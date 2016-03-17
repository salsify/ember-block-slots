/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import {
  arr
} from 'ember-block-slots/helpers/arr'

describe('ArrHelper', function () {
  // Replace this with your real tests.
  it('works', function () {
    let result = arr(42)
    expect(result).to.be.ok
  })
})
