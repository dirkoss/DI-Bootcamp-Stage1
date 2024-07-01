// 1.

for (let index = 1; index = 6; index++) {
    if (index == 1) {
        console.log("*");
    } else if (index == 2){
        console.log("**");
    } else if (index == 3){
        console.log("***");
    } else if (index == 4){
        console.log("****");
    } else if (index == 5){
        console.log("*****");
    } else if (index == 6){
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


