function format(index, majorColor, minorColor) {
    return `${index} | ${majorColor} | ${minorColor}`;
}

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const index = i * minorColors.length + j;
            const majorColor = majorColors[i];
            const minorColor = minorColors[j];
            console.log(format(index, majorColor, minorColor));
        }
    }
    return majorColors.length * minorColors.length;
}
