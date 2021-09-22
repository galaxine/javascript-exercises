const sumAll = function(start, finish) {
    let sum = 0;
    if (start < 0 || finish < 0) {
        return "ERROR"
    } else if (!(typeof start === "number") || !(typeof finish === "number")) {
        return "ERROR"
    } else if (start > finish) {
        for (let index = finish; index <= start; index++) {
            sum += index;
        }
    }
    for (let index = start; index <= finish; index++) {
        sum += index;
    }
    return sum;
};

console.log(!(typeof 3 === 'number'));
// Do not edit below this line
module.exports = sumAll;