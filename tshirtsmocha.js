const assert = require('assert');
const size = require('./tshirt');

describe('tshirt size function', function() {
  it('should return S for size 37', function() {
    assert.equal(size(37), 'S');
  });

  it('should return M for size 38 or 40', function() {
    assert.equal(size(38), 'M');
    assert.equal(size(40), 'M');
  });

  it('should return L for size 43', function() {
    assert.equal(size(43), 'L');
  });
});
