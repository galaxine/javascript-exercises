const removeFromArray = function(array, option1 = undefined, option2 = undefined) {
    const optionsArray = [option1, option2];
    optionsArray.forEach(
        option => {
            if (array.includes(option)) {
                array.splice(array.indexOf(option), 1);
            }
        }
    );
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;