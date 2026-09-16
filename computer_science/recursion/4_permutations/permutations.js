const permutations = function(inputArray, perm = [], perms = []) {
    if (!inputArray.length) {
        perms.push(perm)
    } else {
        for (let i = 0; i < inputArray.length; i++) {
            const newArray = [...inputArray.slice(0, i), ...inputArray.slice(i + 1)]
            const newPerm = perm.concat(inputArray[i])
            permutations(newArray, newPerm, perms)
        }
    }
    return perms
};

const sample = [1, 2, 3]
console.log('permutations', permutations(sample))

// Do not edit below this line
module.exports = permutations;
