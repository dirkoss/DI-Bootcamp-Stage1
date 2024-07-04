
// 2.
const div = document.getElementById("container")
console.log(div);

let list = document.getElementsByClassName("list")
list[0].children[1].innerHTML = "Richard"

list[1].removeChild(list[1].children[1])

for (let index = 0; index < list.length; index++) {
    list[index].firstElementChild.innerHTML = "Dirk Ultee" 
}


// 3.

for (let index = 0; index < list.length; index++) {
    list[index].classList.add("student_list")
}   

list[0].classList.add("university", "attendance")

// 4.

div.style.background = "blue"

list[1].children[1].style.display = "none"; 

list[0].children[1].style.border = "2px black"

document.body.style.fontSize = "30px"




