const {expect} = require('chai')

result = print_color_map();
expect(result).equals(25);

const result2 = print_color_map();
expect(result2[0]).equals("White | Blue");

console.log('All is well (maybe!)');
