const {expect} = require('chai');
const {print_color_map} = require('./colorMap');

describe('print_color_map', function() {
  it('should return total colors', function() {
    const result = print_color_map();
    expect(result).to.equal(25);
  });
});
