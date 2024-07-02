// 1.

for (let i = 0; i <7 1; i++) {
    if (i == 1) {
        console.log("*");
    } else if (i == 2){
        console.log("**");
    } else if (i == 3){
        console.log("***");
    } else if (i == 4){
        console.log("****");
    } else if (i == 5){
        console.log("*****");
    } else if (i == 6){
        console.log("******");
    }
}


// 2.
let pattern = "*"

for (let i = 1; i<7; i++) {
    for (let j = 0; j<=i; j++) {
        console.log(pattern.repeat(i));
    }
}


