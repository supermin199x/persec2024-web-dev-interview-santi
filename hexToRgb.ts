
function hexToRgb(hex: string) {

    hex = removeSharp(hex);
    let red: number, green: number, blue: number;

    if (hex.length === 3) {
        red = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        green = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        blue = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
        red = parseInt(hex.substring(0, 2), 16);
        green = parseInt(hex.substring(2, 4), 16);
        blue = parseInt(hex.substring(4, 6), 16);
    } else {
        throw new Error('คุณป้อนข้อมูลไม่ถูกต้อง !');
    }

    return { r: red, g: green, b: blue };
}

function removeSharp(hex: string) {
    return hex.charAt(0) === '#' ? hex.substring(1) : hex;
}

console.log(hexToRgb('#F23432'));