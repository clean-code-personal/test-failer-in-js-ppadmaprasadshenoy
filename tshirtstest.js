const chai = require('chai');
const size = require('./tshirt');
const expect = chai.expect;

expect(size(37)).equals('S');
expect(size(38)).equals('M');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
console.log('All is well (maybe!)');
