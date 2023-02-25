const {expect} = require('chai');
const {print_color_map} = require('./misaligned');

describe('print_color_map', function() {
  it('should print 25 color codes and return 25', function() {
    expect(print_color_map()).to.equal(25);
  });
  
  it('should log the correct output', () => {
    print_color_map();
    expect(console.log.firstCall.args[0]).equals('0 | White | Blue');
  });
});
