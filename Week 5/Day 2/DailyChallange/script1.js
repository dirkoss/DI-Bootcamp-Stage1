let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")
if (wordNot < wordBad && wordBad != -1 && wordNot != -1) {
    let old = sentence.slice(wordNot, wordBad + 3)
    let new1 = sentence.replace(old, "good")
    console.log(new1);

} else {
    console.log(sentence)
}