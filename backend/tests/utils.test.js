var assert = require('assert');
var calculator = require('../src/utils/calculator');

describe('Calculator', function () {
  describe('add()', function () {
    it('should return 5 when 2 + 3', function () {
      const result = calculator.add(2, 3);
      assert.strictEqual(result, 5);
    });

    it('should return 0 when -2 + 2', function () {
      const result = calculator.add(-2, 2);
      assert.strictEqual(result, 0);
    });
  });
});
