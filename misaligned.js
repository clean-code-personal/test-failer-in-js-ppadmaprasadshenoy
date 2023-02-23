function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let totalColors = majorColors.length * minorColors.length;
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${(i * minorColors.length + j).toString().padStart(2, '0')} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}`);
        }
    }
    return totalColors;
}

module.exports = {
    print_color_map
};
