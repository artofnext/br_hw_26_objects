function newTime(hrs, mins = 0, secs = 0) {
    return {
        hours: hrs,
        minutes: mins,
        seconds: secs,

        showTime: function () {
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        },
    }
};

let t1 = newTime(12,60,120);

let t2 = newTime(1, 20, 56);

console.log(toSec(t1));
t1.showTime();
t2.showTime();
toTime(toSec(t1)).showTime();
adjustSec(361, t1).showTime();
adjustMins(361, t1).showTime();
adjustHours(361, t1).showTime();
addTimes(t1, t2).showTime();

function toSec(time) { //Should be the method
    return ((time.hours * 60 + time.minutes) * 60 + time.seconds);
}

function toTime(seconds) {
    let secs = seconds % 60;
    let mins = (seconds - secs) / 60 % 60;
    let hrs = ((seconds - secs) / 60 - mins) / 60;

    return newTime( hrs, mins, secs)
}

function adjustSec(sec, time = t1) {
    return toTime(sec + toSec(time));
}

function adjustMins(mins, time = t1) {
    return adjustSec(mins * 60, time);
}

function adjustHours(hrs, time = t1) {
    return adjustSec(hrs * 60 * 60, time);
}

function addTimes(time1, time2) {
    return toTime(toSec(time1) + toSec(time2));
}