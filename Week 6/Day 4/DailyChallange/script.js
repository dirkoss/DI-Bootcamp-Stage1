// const form = document.querySelector('form');
// document.getElementById('submit').addEventListener('click', handleSubmit)

// function handleSubmit(e){
//     e.preventDefault();

//     const form = document.querySelector("form");
//     const formData = new FormData(form);

//     const data = Object.fromEntries(formData.entries());

//     const stringified = JSON.stringify(data);

//     const element = document.createElement("p");
//     element.innerText = stringified;
//     document.querySelector("body").appendChild(element);
// }

let bobsFollowers = ['bob','hans','kees','peter']
let tinasFollowers = ['kees', 'piet','peter']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
   if (tinasFollowers[j] === bobsFollowers[i]){mutualFollowers.push(tinasFollowers[j])}}}

console.log(mutualFollowers)