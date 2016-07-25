/* eslint valid-jsdoc:0 */
import Ember from 'ember'
const {
  A,
  Helper
} = Ember

/**
 * Per yield slot parameters made available to an associated block slot
 *
 * e.g.
 *
 * {{#yield-slot 'foo' (block-params 'a' 'b' 'c')}}
 *   <div>{{yield}}</div>
 * {{/yield-slot}}
 *
 * would be available as
 *
 * {{#block-slot 'foo' as |x y z|}}
 *   {{x}} {{y}} {{z}}
 * {{/block-slot}}
 *
 * and would result in DOM
 *
 * <div>a b c</div>
 */
export function blockParams (params) {
  return A(params)
}

export default Helper.helper(blockParams)
