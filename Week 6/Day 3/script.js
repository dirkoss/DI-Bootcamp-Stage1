// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(number);

// function number(item, index, arr) {
//     console.log(item + " is at index " + index + " in the array.");
// }

// // is the same as:

// arr.forEach((item, index) => {
//     console.log(item + " is at index " + index + " in the array.");
// }   );


// given n , take the sum of the digits of n and return the sum of the digits of the sum of the digits of n
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function sumOneDigit(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
        if (n === 0 && sum > 9) {
            n = sum;
            sum = 0;
    }
    }
    return console.log(sum);
}

sumOneDigit(35435);