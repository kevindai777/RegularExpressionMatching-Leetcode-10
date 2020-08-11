//Objective is to see whether a pattern and a string match
//The pattern can have '.', which can represent any character in the alphabet
//and '*', which represents that the previous character can be repeated any number of times (including 0)

let string = "aab", pattern = "c*a*b"


//O((T+P)2^(T+P/2)) solution where T is the length of the string and P is the length of the pattern

//As a reminder, 'slice' returns the rest of the string past the given index (starting at 1)
//Starting with the example of 'aab' and 'c*a*b'

//Check if both strings are exhausted
if (!pattern) {
    return !string
}

//Check if the first character matches
//It matches if they share the same character or if the pattern starts with a '.'
let hasFirstCharMatch = string && (pattern[0] == string[0] || pattern[0] == '.')

//If an asterick shows up, check two things:
//Check with the rest of the pattern (a*b) -> This is since '*' can represent the previous character as well as the '*' being deleted
//Check if the first characters match, and if that's the case, if the rest of the string
//without the first character (ab) matches the pattern (c*a*b) -> This can be interpreted as deleting the matching character from the string
if (pattern[1] == '*') {
    return isMatch(string, pattern.slice(2)) || (hasFirstCharMatch && isMatch(string.slice(1), pattern))
}

//Recursive way of asking if they have the same first character
//If so, we remove a character from both strings and try again
return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false
