const pascal = function(n) {

    if (n <= 1) return [1]

    const nRow = []

    const arrayBefore = pascal(n - 1)

    const arrayForCalc = [...arrayBefore]
    arrayForCalc.push(0)
    arrayForCalc.unshift(0)

    for (let i = 0; i < arrayForCalc.length - 1; i++) {
        nRow.push(arrayForCalc[i] + arrayForCalc[i + 1])
    }
    
    return nRow
};


// Do not edit below this line
module.exports = pascal;
