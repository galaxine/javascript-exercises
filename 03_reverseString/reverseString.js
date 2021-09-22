const reverseString = function(str) {
    splitStr = str.split("");
    reversedStr = "";
    // work backwards and concatenate
    for (let index = splitStr.length - 1; index >= 0; index--) {
        reversedStr += splitStr[index];
    }
    return reversedStr;
};
// Do not edit below this line
module.exports = reverseString;