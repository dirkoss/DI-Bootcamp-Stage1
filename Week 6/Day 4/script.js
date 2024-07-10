let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;

let childAge = 14;

if (earlyReg == 'true' && childAge > 18) {
  raceNumber += 1000;}

if (earlyReg == 'true' && childAge > 18) {
  console.log(`Your starttime is 0930 and your startnumber is ${raceNumber}`)
} 
else if (earlyReg !== 'true' && childAge > 18) {
  console.log(`Late adults run at 11:00 am Your starttime is 0930 and your startnumber is ${raceNumber}`)};
  
else if (childAge < 18) {
  console.log(`Youth registrants run at 12:30`)
}