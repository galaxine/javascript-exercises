const removeFromArray = function(array, ...optionsArray) {
    optionsArray.forEach(
        option => {
            if (array.includes(option)) {
                array.splice(array.indexOf(option), 1);
            }
        }
    );
    return array;
};

function argumentsGiven() {
    return arguments;
}
console.log(removeFromArray([1, 2, 3, 4], 3, 4));
// Do not edit below this line
module.exports = removeFromArray;