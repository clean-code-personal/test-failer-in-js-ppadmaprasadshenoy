const {expect} = require('chai');

describe('print_color_map()', () => {
    it('should return 25', () => {
        const result = print_color_map();
        expect(result).equals(25);
    });
  
    it('should return the first item is White | Blue', () => {
        const result2 = print_color_map();
        expect(result2[0]).equals("White | Blue");
    });
});
