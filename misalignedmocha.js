const {expect} = require('chai');

describe('print_color_map()', () => {
    it('should return 25', () => {
        const result = print_color_map();
        expect(result).equals(25);
    });
  
   it('should return the first row as "1. White | Blue | 2. Black | Green"', () => {
    const result = print_color_map();
    expect(result[0]).equals("1. White | Blue | 2. Black | Green");
    });
});
