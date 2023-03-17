function splitArray(arr, size) {
    if (size <= 0) return [];
    if (size >= arr.length) return [arr];
    return arr
        .reduce((acc, _, i) =>
                (i % size)
                    ? acc
                    : [...acc, arr.slice(i, i + size)]
            , []);
}

const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);
const arr2 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 6);
const arr3 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 0);
const arr4 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 10);
const arr5 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], -5);
const arr6 = splitArray(['1'], 10);

console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(arr2); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(arr3); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(arr4); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(arr5); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(arr6); // [['a', 'b'], ['c', 'd'], ['e', 'f']]