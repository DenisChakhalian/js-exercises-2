function clearArray(arr) {
    return arr.reduce((acc, el) => el ? [...acc, el] : acc, []);
}

const arr1 = clearArray([1, 0, 2, false, '', 3]);

console.log(arr1); // [1, 2, 3]