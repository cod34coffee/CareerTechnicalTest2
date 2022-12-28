let array_int1 = [10, 20, 30, 40, 51, 61, 71];
let array_int2 = [15, 25, 31, 86, 600, 700, 900];

const newArray = array_int1.concat(array_int2);
const sortMachine = ((a, b) => a-b);
newArray.sort(sortMachine);
const numbers = new Set(newArray.values());
lengthNum = numbers.size;
let middleIndex = Math.floor(lengthNum / 2);
let median = (newArray[middleIndex] + newArray[middleIndex - 1]) / 2;
console.log(median);



