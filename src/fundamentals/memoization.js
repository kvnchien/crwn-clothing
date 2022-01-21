function addTo80(n) {
    console.log('long time');
    return n + 80;
}

let cache = {};
function memoizationAddTo80(n) {
    if(n in cache) {
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log('1', memoizationAddTo80(5));
console.log('2', memoizationAddTo80(5));