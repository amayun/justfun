function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function devide(a, b) {
    if (b === 0) throw Error('Can\'t devide by zero');
    return a / b
}

function sin(angle) {
    return Math.sin(angle)
}