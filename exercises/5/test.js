const arr1 = [1];

function concatArray(...params) {
    return params.reduce((acc, el) => acc.concat(el), []);
}

// const concatArray = (...params) => params.reduce((acc, el) => acc.concat(el), []);

const arr2 = concatArray(arr1, 2, [3], [[4]]);

console.log(arr2); // [1, 2, 3, [4]]
console.log(arr1); // [1]