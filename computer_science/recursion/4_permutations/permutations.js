const permutations = function(inputArray) {
    let answer = []
    
    if (inputArray.length === 0) {
        answer.push([])
    } 

    for (let i = 0; i < inputArray.length; i++) {
        const value = inputArray[i]
        const arr = [...inputArray.slice(0, i), ...inputArray.slice(i + 1, inputArray.length)]
        answer.push([value, ...arr])
        const firstVari = [value, ...arr]
        console.log("[value, ...arr", firstVari)
        for (let j = 1; j < arr.length + 1; j++){
            // console.log({arr})
            // console.log({value})
            // const first = arr.slice(0, j)
            // const second = arr.slice(j)
            // console.log({first})
            // console.log({second})

            const finalArray = [...arr.slice(0, j), value,  ...arr.slice(j) ]
            console.log({finalArray})
            answer.push(finalArray)
        }

    }

    const uniqueArrays = Array.from(
    new Set(answer.map((subArr) => JSON.stringify(subArr))),
    (str) => JSON.parse(str)
    )

    return uniqueArrays
};

const sample = [1, 2, 3]
// const sample = []
// const sample = [1]
console.log('permutations', permutations(sample))

// Do not edit below this line
module.exports = permutations;
