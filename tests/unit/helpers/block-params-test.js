import { module, test } from 'qunit';
import { blockParams } from 'ember-block-slots/helpers/block-params';

module('Unit | Helper | block-params', function () {
  test('"blockParams()" returns an array', function (assert) {
    const arrayParameter = ['0', '1', '2'];

    const result = blockParams(arrayParameter);
    assert.ok(result, 'Truthy result');
    assert.ok(Array.isArray(result), 'result is an array');
    assert.ok(result.length === 3, 'result has length 3');
    assert.ok(result[0] === '0', 'First array element is set');
    assert.ok(result[1] === '1', 'Second array element is set');
    assert.ok(result[2] === '2', 'Third array element is set');
  });
});
