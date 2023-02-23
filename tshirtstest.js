const {expect} = require('chai');

describe('size function', () => {
  it('should return S for values less than 38', () => {
    expect(size(37)).to.equal('S');
  });

  it('should return M for values between 38 and 42', () => {
    expect(size(38)).to.equal('M');
    expect(size(40)).to.equal('M');
    expect(size(41)).to.equal('M');
  });

  it('should return L for values greater than 42', () => {
    expect(size(43)).to.equal('L');
  });
});
