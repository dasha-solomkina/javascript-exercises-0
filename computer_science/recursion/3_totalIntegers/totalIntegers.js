const totalIntegers = function (myObject) {
  let runningCount = 0;

  if ((typeof myObject !== "object" ||  myObject === null)) { 
    return
  }

  const myValues = Object.values(myObject);

  for (const value of myValues) {
    if (Number.isInteger(value)) {
      runningCount++;
    } else if (typeof value === "object" && value !== null) {
      runningCount += totalIntegers(value);
    } 
  }
  return runningCount;
};

// Do not edit below this line
module.exports = totalIntegers;
