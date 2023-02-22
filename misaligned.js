const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let totalColors = majorColors.length * minorColors.length;               // Added new
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            // console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            console.log(`${(i * minorColors.length + j).toString().padStart(2, '0')} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}`);    //Added new
        }
    }
    //return majorColors.length * minorColors.length;
    return totalColors;                                                      // Added new
}

result = print_color_map();
expect(result).equals(25);
console.log('All is well (maybe!)');
