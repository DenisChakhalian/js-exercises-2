const arr1 = [[1, 2], [3, 4]];
const arr2 = aCopy(arr1);

arr1.push([5, 6]);

console.log(arr1); // [[1,2], [3,4], [5,6]]
console.log(arr2); // [[1,2], [3,4]]

// --

const arr3 = [['a', 'b', 'c', 'd'], ['e', 'f'], ['g', 'h', 'i']];
const arr4 = aCopy(arr3);
const arr5 = [['a', ['a', 'b', ['a', 'b', 'c', 'd'], 'd'], 'c', 'd'], [['e', 'f'], 'f'], ['g', 'h', [['g', ['g', ['g', 'h', 'i'], 'i'], 'i'], 'h', ['g', 'h', 'i']]]];
const arr6 = ['a', ['a', ['a', 'b', ['a', 'b', 'c', 'd'], 'd'], 'c', 'd'], [['e', 'f'], 'f'], ['g', 'h', [['g', ['g', ['g', 'h', 'i'], 'i'], 'i'], 'h', ['g', 'h', 'i']]]];

arr3.unshift(['z']);

console.log(arr3); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(arr4); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(aCopy(arr5));
console.log(aCopy(arr6));

function aCopy(arr) {
    return arr.map(el => Array.isArray(el) ?
                el.reduce((acc, itm) => Array.isArray(itm) ?
                    acc : [...acc, itm]
        , []) : el)
}