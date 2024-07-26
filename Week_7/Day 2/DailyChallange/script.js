// Instructions

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    const userInput = document.getElementById("category").value;
    one(userInput)
})


async function one(userInput){
    const limit = 1;
    const url = 'https://api.giphy.com/v1/gifs/random' + '?limit=' + limit + '&tag=' + userInput + '&api_key=' + apiKey;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json()
        const imgUrl = await data.data.images.original.url;
        addImageToDom(imgUrl);

        
        
    }
    catch(err){
        console.error(err)
    }
}

function addImageToDom(imgUrl){
    const divElement = document.createElement("div");
    divElement.classList.add("giphyImg");
    document.body.appendChild(divElement)
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src",imgUrl);
    const deleteButtonElement = document.createElement("button")
    deleteButtonElement.innerText = 'delete';

    deleteButtonElement.addEventListener('click',removeItem);

    divElement.appendChild(imgElement);
    divElement.appendChild(deleteButtonElement);
}

function removeItem(){
    this.parentNode.remove();
}


document.getElementById('deleteAllGifs').addEventListener('click', deleteAllGifs);

function deleteAllGifs(){
    const gifs = Array.from(document.getElementsByClassName("giphyImg"));
    for(const gif of gifs){
        gif.remove();
    }
}
