/**
 * there are a few cases to understand:
 * + The string is empty, but n is whatever
 *      + return an empty string
 * + The n is negative, but string is whatever
 *      + return an "ERROR" string
 * + The n is 0
 *      + return an empty string
 * 
 * @param {The String that is passed} string 
 * @param {the times it is repeated} n 
 * @returns modified string
 */
const repeatString = function(string, n) {
    gluedString = "";
    if (string === "") {
        return gluedString;
    } else if (n < 0) {
        return "ERROR"
    } else if (n === 0) {
        return gluedString;
    } else {
        for (let index = 0; index < n; index++) {
            gluedString += string;
        }
        return gluedString;
    }
};

// Do not edit below this line
module.exports = repeatString;