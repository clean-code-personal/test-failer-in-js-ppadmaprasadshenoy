const {expect} = require('chai')

describe('print_color_map', () => {
  it('should return 25', () => {
    const result = print_color_map();
    expect(result).equals(25);
  });
   it('should return 10', () => {
    const result = print_color_map();
    expect(result).equals(10);
  });
//   it('should log the correct output', () => {
//     print_color_map();
//     expect(console.log.firstCall.args[0]).equals('0 | White | Blue');
//   });
});
