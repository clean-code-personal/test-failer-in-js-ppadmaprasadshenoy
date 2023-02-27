const {expect} = require('chai');
const { print_color_map } = require('../misaligned');

describe('print_color_map()', () => {
    it('should return 25', () => {
        const result = print_color_map();
        expect(result).equals(25);
    });
  
    it('should return the first row as "1. White | Blue | 2. White | Orange"', () => {
        print_color_map();
        expect(console.log.getCall(0).args[0]).to.equal('1. White | Blue');
        expect(console.log.getCall(1).args[0]).to.equal('2. White | Orange');
    });
});
