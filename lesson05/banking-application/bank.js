let balance = 1000;

function start() {
    let keepGoing = true;
    while (keepGoing) {
        keepGoing = askUserInput();
    }
}

function askUserInput() {
   const response = prompt('Enter Q to quit. Enter W to withdraw. Enter D to deposit. Enter B to view balance.');
   switch(response) {
       case "Q": case "q":
           alert('good bye');
           return false;

        case "W": case "w":
            const amount = prompt('How much do you want to withdraw?');
            const newBalance = balance - Number(amount);
            if(newBalance < 0 ) {
                alert('INSUFFICIENT FUNDS');   
            } else {
                balance = newBalance;
            }
            return true;

        case "D": case "d":
            let depositAmount = prompt('How much do you want to deposit?');
            depositAmount = Number(depositAmount);
            const depositCap = 50000; 
            if(balance + depositAmount > depositCap) {
                alert('You have exceeded the $50,000 cap')
            } else {
                balance += depositAmount;
            }
            
            return true;

        case "B": case "b":
            alert('You currently have $' + balance);
            return true;

        default:
            alert('invalid option');
            return true;

   }
}

/*// Loops inside of Loops
for (let i = 0; i < 50000; i++) {
    console.log('hello');
}


let j = 0;
while (j < 50000) {
    console.log(j);
    j++ ; // j=j+1; ++j;
}

while (true) {

}

// Outer Loops

for (let i = 0; i < 50000; i++)
    console.log('outer loop');
    

for(let j = 0; j < 50000; j++) {
    console.log(i,j);
}*/




