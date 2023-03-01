const assert = require('assert');
const size = require('../tshirts');

describe('tshirt size function', function() {
  it('should return S for size 37', function() {
    assert.strictEqual(size(37), 'S');
  });

  it('should return M for size 38 or 40', function() {
    assert.strictEqual(size(38), 'M');
    assert.strictEqual(size(40), 'M');
  });

  it('should return L for size 43', function() {
    assert.strictEqual(size(43), 'L');
  });
});
