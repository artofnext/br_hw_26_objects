// import { isNull } from "util";
//Car Object
let car = {
    manufacturer: "handmade",
    model: "unic",
    max_speed: 120,
    average_speed: 90,
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
