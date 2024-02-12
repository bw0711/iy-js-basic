const removeElement = (arr, elem, newElem) => arr.map(item => item === elem ? newElem : item);

const arr = [1, 2, 3, 4, 5];
const elem = 3;
const newElem = 10;

console.log("Initial array:", arr);
const newArray = removeElement(arr, elem, newElem);
console.log("Array after replacement:", newArray);