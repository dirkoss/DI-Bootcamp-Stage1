// Exercise 6.

let navBar = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

const newLi = document.createElement("li");
let textNode = document.createTextNode("Logout");
newLi.appendChild(textNode)
navBar.firstElementChild.appendChild(newLi)
console.log(navBar.firstElementChild.firstElementChild);
console.log(navBar.firstElementChild.lastElementChild)