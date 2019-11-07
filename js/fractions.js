//Fractions

// class Fraction {
//     constructor(n, d, w = 0) {
//         this._numerator = n + w * d;
//         this.denominator =d;
//     }

//     whole() {
//         return Math.floor(this._numerator / this.denominator);
//     }

//     numerator() {
    //         return this._numerator % this.denominator;
    //     }
    // }

    // let whole = function() {
        //     return Math.floor(this._numerator / this.denominator);
// };

// let numerator = function() {
    //     return this._numerator % this.denominator;
    // };
    
    // let fr1 = {
        //     whole: function() {
            //         return Math.floor(this._numerator / this.denominator);
            //     },
            //     numerator: function() {
                //         return this._numerator % this.denominator;
                //     },
                //     _numerator: 2,
                //     denominator: 3,
                // };
                
                // let fr2 = {
                    //     whole: function() {
                        //         return Math.floor(this._numerator / this.denominator);
                        //     },
                        //     numerator: function() {
                            //         return this._numerator % this.denominator;
                            //     },
                            //     _numerator: 8,
                            //     denominator: 4,
// };


//num - numerator
//denom - denominator
//
//Return object
function newFraction(num = 0, denom = 1) {

    return {
        reduct: function () {
            let reducer = gcd(this._numerator, this.denominator);
            this._numerator = this._numerator / reducer;
            this.denominator = this.denominator / reducer;
        },
        show: function () {
            if (this.numerator()) {
                console.log(`${this.whole()} ${this.numerator()}/${this.denominator}`);
            } else {
                console.log(`${this.whole()}`);
            }
        },
        whole: function () {
            return Math.floor((this._numerator - this.numerator()) / this.denominator); //Workout negative numbers
        },
        numerator: function () {
            return this._numerator % this.denominator;
        },
        _numerator: Math.round(num),
        denominator:  Math.round(denom),
    };

    // console.log('Wrong input! Denominator should be greater 0');
}

//Fractions init

let fr1 = newFraction(23, 23);

let fr2 = newFraction(4, 2);

let fr3 = 2;

//ToDo rewrite as a method
function showFraction(a) {
    if (a.numerator()) {
        console.log(`${a.whole()} ${a.numerator()}/${a.denominator}`);
    } else {
        console.log(`${a.whole()}`);
    }
};

function isInteger(a) { //ToDo
    return (typeof(a == 'number'));
}

function toFraction(a) {
    let str = a.toString();
    if (str.indexOf('.') < 0) {
        return newFraction(a, 1);
    }
    let factor = Math.pow(10, (str.length - str.indexOf('.')-1)); // Find the factor to get integer numerator
    return reduction(newFraction(a * factor, factor));
}

// showFraction( toFraction(21.1));
// showFraction( toFraction(2.258));

function isFraction(a) {
    return (isObject(a) && "denominator" in a && "_numerator" in a && a.denominator > 0);
}

console.log(isFraction(fr1));
console.log(isFraction(fr3));

//ToDo rewrite as a method
function reduction(a) {
    let reducer = gcd (a._numerator, a.denominator);
    a._numerator = a._numerator / reducer;
    a.denominator = a.denominator / reducer;
    return a;
};

function multiply(a, b) {
    let c = newFraction();
    // c.whole = 0;
    c._numerator = a._numerator * b._numerator;
    c.denominator = a.denominator * b.denominator;

    return reduction(c);
};

function divide(a, b) {
    if (b._numerator != 0) {
        let c = newFraction(b._numerator > 0 ? b.denominator : b.denominator * -1, Math.abs(b._numerator)); //Switching sign to numerator, denominator always > 0
        return multiply(a, c);
    }

    console.log('Ahtung! Attempt to divide on ZERO!')
    return false;
}

function add(a, b) {
    let c = newFraction(); // ToDo rewrite with values!
    let lcmAB = lcm (a.denominator, b.denominator);
    let factorA = lcmAB / a.denominator;
    let factorB = lcmAB / b.denominator;
    c._numerator = a._numerator * factorA + b._numerator * factorB;
    c.denominator = lcmAB;
    return reduction(c);
}

function substract(a, b) { //ToDo rewrite - it mustn`t change the argument!
    b._numerator = b._numerator * -1;
    return reduction(add(a, b))
}



console.log('Origin a:');
console.table(fr1);
console.log('Origin b:');
console.table(fr2);

console.log('Divide a / b:');
console.table(divide(fr1, fr2));
showFraction(divide(fr1, fr2));
console.log('Multiplyed a * b:');
// console.table(multiply(fr1, fr2));
showFraction(multiply(fr1, fr2));
console.log('Add a + b:');
showFraction(add(fr1, fr2));
console.log('Substract a - b:');
showFraction(substract(fr1, fr2));
// console.table(substract(fr1, fr2));
// showFraction(newFraction());

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