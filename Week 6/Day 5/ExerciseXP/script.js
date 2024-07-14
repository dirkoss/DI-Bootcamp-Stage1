
const flip = () => {
    const coin = Math.floor(Math.random() * 2);
    return coin === 0 ? 'heads' : 'tails';
}

console.log(flip());

const flipcoin = new Promise((resolve, reject) => {
    setTimeout(() => {
        const flipresult = flip();
        if (flipresult === 'heads') {
            resolve('You win'+ flipcoin);
        } else {
            reject('You lose' + flipcoin);
        }
    }, 2000);

});

flipcoin.then((result) => {
    console.log(result);
}
).catch((error) => { console.log(error) }
);
