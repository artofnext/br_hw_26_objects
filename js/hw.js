// import { isNull } from "util";
//Car Object
let car = {
    manufacturer: "handmade",
    model: "unic",
    max_speed: 120,
    engine_power: 100,
    doors: 5,
    max_payload: 1000,
    seats: 5,
};

console.log(typeof(car));

function isObject(obj) {
    return (typeof(obj) == 'object' && !!obj);
}

function showObject(obj) {

    if (isObject(obj)) {
        for (let key in obj) {
            console.log(`Property: ${key} - Value: ${obj[key]}`);
        }
    } else {
        console.log(`Wrong function param!`);
    }
};

function showObjectAlt(obj) {
    if (isObject(obj)) {
        console.table(obj);
    } else {
        console.log(`Wrong function param!`);
    }
};

function startShow() {

    console.log('Show With For');
    showObject(car);
    
    console.log('Show With Table');
    showObjectAlt(car);
}

//Fractions

class Fraction {
    constructor(n, d, w = 0) {
        this._numerator = n + w * d;
        this.denominator =d;
    }

    whole() {
        return Math.floor(this._numerator / this.denominator);
    }

    numerator() {
        return this._numerator % this.denominator;
    }
}

let fr1 = {
    whole: function() {
        return Math.floor(a.numerator / a.denominator);
    },
    numerator: function() {

    }
    _numerator: 2,
    denominator: 3,

}

let fr2 = {
    whole: 1,
    numerator: 8,
    denominator: 4,
}

function reduction(a) {
    let reducer = gcd (a.numerator, a.denominator);
    a.numerator = a.numerator / reducer;
    a.denominator = a.denominator / reducer;
    return a;
}

function normalise(a) {
    if (a.numerator < a.denominator) {
        return a;
    }
    a.whole = a.whole + Math.floor(a.numerator / a.denominator);
    a.numerator = a.numerator % a.denominator;

    if (a.numerator == 0) { //We have integer
        a.denominator = 1;
    }

    return a;
}

function multiply(a, b) {
    let c = {};
    c.whole = 0;
    c.numerator = (a.numerator + a.whole * a.denominator) * (b.numerator + b.whole * b.denominator);
    c.denominator = a.denominator * b.denominator;

    return normalise(c);
}

console.log('Origin a:');
console.table(fr1);
console.log('Origin b:');
console.table(fr2);

console.log('Multiplyed a * b:');
console.table(multiply(fr1, fr2));

// console.log('Reduced a:');
// console.table(reduction(fr1));
// console.log('Normalised a:');
// console.table(normalise(fr1));

// function addFractions(a, b) {
//     let res = {
//         whole: a.whole + 
//     }
    
//     return 
// }

function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function lcm(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}