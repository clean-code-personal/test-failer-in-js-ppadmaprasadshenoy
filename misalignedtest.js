const expect = require('chai').expect;

describe('print_color_map', () => {
  it('should return 25', () => {
    expect(print_color_map()).equals(25);
  });
  it('should return 30', () => {
    expect(print_color_map()).equals(30);
  });
});
