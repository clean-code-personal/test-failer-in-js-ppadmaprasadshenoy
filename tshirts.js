// function size(cms) {
//     if (cms < 38) {
//         return 'S';
//     } else if (cms > 38 && cms < 42) {
//         return 'M';
//     } else {
//         return 'L';
//     }
// }

// module.exports = size;

const { expect } = require('chai');

function size(cms) {
  if (cms < 38) {
    return 'S';
  } else if (cms >= 38 && cms < 42) {
    return 'M';
  } else {
    return 'L';
  }
}

expect(size(37)).to.equal('S');
expect(size(38)).to.equal('M');
expect(size(40)).to.equal('M');
expect(size(42)).to.equal('L');
expect(size(43)).to.equal('L');

console.log('All is well (maybe!)');
