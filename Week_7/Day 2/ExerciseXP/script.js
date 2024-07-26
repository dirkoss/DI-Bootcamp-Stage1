// 🌟 Exercise 1 : Giphy API

const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

async function fetchGifs(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
    }
    catch(err){
        console.error(err);
    }
}

fetchGifs();


// 🌟 Exercise 2 : Giphy API


const q = "sun";
const limit = 10;
const offset = 2;
apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

async function GifFunction(){
    try{
        const response = await fetch(apiUrl)

        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.error(err)
    }
}
GifFunction();


// 🌟 Exercise 3 : Async Function

async function ApiFunction(){
    const apiUrl = 'https://www.swapi.tech/api/starships/9/';
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json();
        const objectStarWars = await data.result;
        console.log(objectStarWars);
    }
    catch(err){
        console.error(err);
    }
}
ApiFunction();



// 🌟 Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// The output should be:  calling -> resolved after 2 seconds