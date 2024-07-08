

// You are tasked with writing a function `solution` 
// that takes a string `S` as input. 
// The string consists of 'a' and/or 'b' characters. 
// The function should return `true` 
// if all occurrences of the letter 'a' appear before all occurrences of the letter 'b' 
// in the string `S`. 
// If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// the function should also return `true`. 
// Otherwise, it should return `false`.


function solution(s) {
    let a = s.indexOf('a');
    let b = s.indexOf('b');
    if (a === -1 || b === -1 || a < b || a !== -1 && b === -1) {
        return true;
    }
    return false;
}

console.log(solution ("ababa")) 