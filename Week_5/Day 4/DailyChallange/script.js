let form = document.getElementById("libform")
let noun = document.getElementById("noun")
let adjective = document.getElementById("adjective")
let person = document.getElementById("person")
let verb = document.getElementById("verb")
let place = document.getElementById("place")
let story = document.getElementById("story")

function madlib(e) {
    e.preventDefault()
    let nountext;
    let adjectivetext;
    let persontext;
    let verbtext;
    let placetext;
    if(noun.value.trim() === ""){
        alert('User input');
      } else {
        nountext = noun.value.trim()
      }
    if(adjective.value.trim() === ""){
        alert('User input');
      } else {
        adjectivetext = adjective.value.trim()
      }
    if(person.value.trim() === ""){
        alert('User input');
      } else {
        persontext = person.value.trim()
      }
    if(verb.value.trim() === ""){
        alert('User input');
      } else {
        verbtext = verb.value.trim()
      }
      if(place.value.trim() === ""){
        alert('User input');
      } else {       
        placetext = place.value.trim()
      }}

    story.innerHTML = `The following story:
    ${nountext}: this is the noun
    ${adjectivetext}: this is the adjective
    ${persontext}: this is the person
    ${verbtext}: this is the verb
    ${placetext}: this is the place`;
    
    form.addEventListener("submit", madlib, false)