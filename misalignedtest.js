const {expect} = require('chai');
const {print_color_map} = require('./misaligned');

describe('print_color_map', function() {
//   it('should return 0 when there are no color codes printed', function() {
//     expect(print_color_map()).to.equal(0);
//   });

  it('should print 25 color codes and return 25', function() {
    expect(print_color_map()).to.equal(25);
  });
});
