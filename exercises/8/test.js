function replaceIn(arr, symbol, start = 0, end = arr.length) {
    return arr.map((el, idx) => (idx < start || idx > end) ? el : arr[idx] = symbol);
}

const arr1 = [1, 2, 3];

const arr1copy1 = replaceIn(arr1, 'a');
console.log(arr1copy1); // ['a', 'a', 'a']

const arr1copy2 = replaceIn(arr1, 2);
console.log(arr1copy2); // [2, 2, 2]

const arr2 = [4, 6, 8, 10];

const arr2copy1 = replaceIn([4, 6, 8, 10], '*', 1, 2);
console.log(arr2copy1); // [4, '*', '*', 10]