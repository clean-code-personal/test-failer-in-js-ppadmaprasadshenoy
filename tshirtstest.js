const chai = require('chai');

expect = chai.expect;

describe('size', () => {
  it('should return S when given 37', () => {
    expect(size(37)).equals('S');
  });
  it('should return M when given 40', () => {
    expect(size(40)).equals('M');
  });
  it('should return L when given null', () => {
    expect(size(null)).equals('L');
  });
  it('should return L when given 43', () => {
    expect(size(43)).equals('L');
  });
});
