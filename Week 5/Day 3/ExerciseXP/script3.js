// Exercise 6. 

let navBar = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

const newLi = document.createElement("li");
let textNode = document.createTextNode("Logout");
newLi.appendChild(textNode)
navBar.firstElementChild.appendChild(newLi)
console.log(navBar.firstElementChild.firstElementChild);
console.log(navBar.firstElementChild.lastElementChild);


// Exercise 7.

const allBooks = [{title: "Elon Musk",
    author: "Walter Isaacson",
    image : "https://m.media-amazon.com/images/I/81Kaj5++6pL._SL1500_.jpg",
    alreadyRead : FALSE
    }, 


    {title: "Red Notice: A True Story of High Finance, Murder, and One Man's Fight for Justice",
    author: "Bill Browder",
    image: "https://m.media-amazon.com/images/I/81keU1kIh1L._SL1500_.jpg",
    alreadyRead : TRUE
    }]

    