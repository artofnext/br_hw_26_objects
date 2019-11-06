// import { isNull } from "util";

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

function showObject(obj) {

    if (typeof(obj) == 'object' && !!obj) {

        for (let key in obj) {
            console.log(`Property: ${key} - Value: ${obj[key]}`);
        }
    } else {
        console.log(`Wrong function param!`);
    }
};

showObject(car);

