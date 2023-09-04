/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let countMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] in countMap)){
            countMap.set(numbers[i], 1);
        } else {
            countMap.set(numbers[i], countMap.get(numbers[i])++);
        }
    }
    let count = 0;
    let majority = 0;
    for (let [key, value] of countMap.entries()) {
        if (value > count) {
            majority = key;
            count = value;
        } else {
            continue;
        }
            
    }
    
    return majority;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};