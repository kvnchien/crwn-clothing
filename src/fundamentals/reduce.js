const myArray = [1,2,3,4,5]

const result = myArray.reduce((accumulator, currentElement) => 
accumulator + currentElement, 11);

console.log(result); //26