const anotherArray = [1,3,5,7,9]
//console.log(anotherArray)

//Find the first element in the anotherArray that satisfies the condition.. Stop after it finds it.
const x = anotherArray.find(e => e === 5)
console.log(x);

//Find the first element in the
const y = anotherArray.find(e => e > 4)
//It finds the first element in the array that satisfies the "greater than 4" condition... it will 
//return that element and stop 
console.log(y);

