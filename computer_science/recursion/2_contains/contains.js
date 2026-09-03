const contains = function (obj, targetWord) {
  const values = Object.values(obj);

  if (values.includes(targetWord)) return true;

  const nextedValues = values.filter(
    (value) => typeof value === "object" && value !== null,
  );

  return nextedValues.some((nested) => contains(nested, targetWord));
};

// Do not edit below this line
module.exports = contains;
