/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let x = 0
    let y = str.length - 1

    while (x != y) {
        if (((str.charAt(x) === str.charAt(y)) || (str.charAt(x).toLowerCase() === str.charAt(y).toLowerCase())) && (/\s/.test(str.charAt(x)) == false) && (/\s/.test(str.charAt(x)) == false)) {
            x = x + 1;
            y = y - 1;
        } else if (/\s/.test(str.charAt(x)) == true) {
            x = x + 1;
        } else if (/\s/.test(str.charAt(x)) == true) {
            y = y - 1;
        } else {
            return false;
    };
    return true;
}
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};