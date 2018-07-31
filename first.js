function sum(a, b) {
    console.log('stop it');
    return a + b
}

function sub(a, b) {
    console.log('stop it');
    return a - b
}

function devide(a, b) {
    if (b === 0) throw Error('Can\'t devide by zero');
    return a / b
}

function sin(angle) {
    console.log('hahaha - you shall not pass');
    return Math.sin(angle)
}