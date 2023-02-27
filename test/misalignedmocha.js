const { expect } = require('chai');
const sinon = require('sinon');
const { print_color_map } = require('../misaligned');

describe('print_color_map()', () => {
  let consoleStub;

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should return 25', () => {
    const result = print_color_map();
    expect(result).to.equal(25);
  });

  it('should return the first row as "1. White | Blue | 2. White | Orange"', () => {
    print_color_map();
    sinon.assert.calledWith(consoleStub.getCall(0), '1. White | Blue');
    sinon.assert.calledWith(consoleStub.getCall(1), '2. White | Orange');
  });
});
