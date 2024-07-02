// 1.

for (let i = 0; i <= 6; i++) {
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
let star = "*"

for (let i = 1; i<7; i++) {
    for (let x = 0; x<=i; x++) {
        console.log(star.repeat(i));
    }
}

