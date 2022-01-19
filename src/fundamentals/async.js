const myPromise = new Promise((resolve, reject) => {

    //The 'false' will allow us to trigger the 'reject' result
    //if(treu) {
    if(true) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have failed');
    }
   
});

//To get to the 'reject' result, you chain the 'then' with a 'catch' function
//myPromise.then(value => console.log(value)).catch(whatever => console.log(whatever));
myPromise
    .then(value => value + "!!!")
    .then(anotherValue => console.log(anotherValue))
    .catch(whatever => console.log(whatever));