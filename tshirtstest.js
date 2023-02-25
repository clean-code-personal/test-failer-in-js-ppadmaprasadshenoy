const {expect} = require('chai');
const size = require('./size');

describe('size', () => {
  it('should return S for size less than 38', () => {
    expect(size(37)).equals('S');
    expect(size(38)).equals('S');
  });
  
  it('should return M for size between 38 and 42', () => {
    expect(size(40)).equals('M');
  });
  
  it('should return L for size greater than 42', () => {
    expect(size(43)).equals('L');
  });
  
});
