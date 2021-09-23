const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) { // we need to check if the year is also dividable by 100
            if (year % 400 === 0) { // if it is, it needs to be dividable by 400
                return true;
            } else {
                return false;
            }
        } else { //return true because it is not dividable by 100.
            return true;
        }
        //after checking it, it might just be a normal year, so check it with this
    }
    return false;
};
console.log(leapYears(1996));
// Do not edit below this line
module.exports = leapYears;