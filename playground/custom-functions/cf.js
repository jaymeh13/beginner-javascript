// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
// this is the function body
    console.log('Running calculate bill');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

// Function call - running
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);
// console.log(myTotal);

function saHiTo(firstName) {
    return `Hello ${firstName}`;
}

// const greeeting = saHiTo('Jim');
// console.log(greeeting);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, 0, 0.2);
console.log(myBill4);
