
const myArray = [1,2,3,4,5]

console.log(myArray.includes(3)); //return true becasue 3 is in the myArray
console.log(myArray.includes(9)); //return false becasue 9 is not in the myArray
console.log(myArray.includes(2, 3)); //return false becaseu 2 is not in the sub array starting the 3rd element
console.log(myArray.includes(2, 1));

var a = 3;
var b = 3;
var c = b;
console.log("b=3, c=b, then c=" + c);
b=5;
console.log("b=3, c=b, b=5, then c=" + c);


const newArray = [{id: 1}, {id:2}, {id:3}];
console.log(newArray.includes({id:2})); //return false becasue 
                                        //the {id:2} is not the same object in the memory
                                        //as the orject stored in the array

//To produce the correct result, 
const o1 = {id:1}
const o2 = {id:2}
const o3 = {id:3}
const newestArray = [o1, o2, o3]
console.log(newestArray.includes(o2)); //return true becasue 
                                       //the 'o2' object points to the same object in the newestArray


