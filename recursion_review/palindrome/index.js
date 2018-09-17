// Write a function that determines if a string is a palindrome, recursively

function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start > end || str === '') return true;
    if (str.charAt(start) !== str.charAt(end)) return false;

    return isPalindrome(str, ++start, --end);
}

console.log(isPalindrome('aa'));