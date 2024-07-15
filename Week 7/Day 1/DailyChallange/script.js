// Instructions

// 1st Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(word => typeof word === 'string')) {
            resolve(arr.map(word => word.toUpperCase()));
        } else {
            reject('Error: Not all items in the array are strings!');
        }
    });
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort());
        } else {
            reject('Error: The array is too short!');
        }
    });
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// If the array of words is the first array, the output will be:
makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));    

// If the array of words is the second array, the output will be:
makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`



let morseJS = JSON.parse(morse); // convert the morse string to a javascript object

let toJs = () => {
    return new Promise((resolve, reject) => {
        if (Object.keys(morseJS).length === 0) {
            reject('Error: The morse javascript object is empty!');
        } else {
            resolve(morseJS);
        }
    });
}

let toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        let userInput = prompt('Please enter a word or a sentence:').toLowerCase();
        let morseTranslation = [];
        for (let char of userInput) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`Error: The character "${char}" doesn't exist in the morse javascript object!`);
            }
        }
        resolve(morseTranslation);
    });
}

let joinWords = (morseTranslation) => {
    let morseString = morseTranslation.join(' ');
    document.body.innerHTML = `<pre>${morseString}</pre>`;
}

toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(error => console.log(error));

// If the user enters the word "Hello", the output will be:
// .... . .-.. .-.. ---, like this

function toJs( ) {
    return new Promise((resolve, reject) => {
        if (Object.keys(morseJS).length === 0) {
            reject('Error: The morse javascript object is empty!');
        } else {
            resolve(morseJS);
        }
    });
}

const joinMorseWords = (morseTranslation) => {
    const para = document.createElement("p");
    para.innerText = morseTranslation.join('\n');;
    document.body.appendChild(para);
}

toJs()
.then((obj) => toMorse(obj))
.then((result) => joinWords(result))
.catch(error => console.log(error))