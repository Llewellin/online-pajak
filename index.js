const calculateTax = require('./tax-calculator')

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

console.log("Please input your monthly salary in IDR.");
standardInput.on('data', function (data) {
    if(data === 'exit\n'){
        console.log("User input complete, program exit.");
        process.exit();
    }else {
        console.log('User Input Data : ' + data);
        const tax = calculateTax(data)
        console.log(`This year you need to pay tax ${tax} IDR\r\n`)
        console.log("Please input your monthly salary in IDR.");
    }
});