
const taxData = [
    {
        range: 0,
        rate: 0.05
    }, 
    {
        range: 50000000,
        rate: 0.15
    }, 
    {
        range: 250000000,
        rate: 0.25
    },
    {
        range: 500000000,
        rate: 0.30
    }
]

validateInput = (salary) => {
    if(isNaN(Number(salary))){
        console.log('Please input number only');
        process.exit();    
    }
}

const calculateTax = (salary) => {
    validateInput(salary);

    const totalIncome = salary * 12;

    const rangeIndex = taxData.reduce((rangeIndex, data) => {
        if(totalIncome > data.range) return ++rangeIndex
        return rangeIndex
    }, 0)
    
    // Pay partial tax among this range
    let tax = (totalIncome -  taxData[rangeIndex-1].range) * (taxData[rangeIndex-1].rate);
    for(let i = 0; i < rangeIndex - 1; i++){
        // Pay full tax among this range
        tax += (taxData[i+1].range - taxData[i].range) * taxData[i].rate
    }

    return tax;
}

module.exports = calculateTax;