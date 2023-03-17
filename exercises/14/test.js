function implode(arr, symbol) {
    return arr.join(symbol)
}
const arr = ['a','b','c'];

const arr2 = ['aaaaa','bbb','ccccccccccc',"3sdfgcsdfgsdf4","1sdfgsdfgdfg2"];

console.log(implode(arr, '-')); // 'a-b-c'
console.log(implode(arr2, '*')); // 'a-b-c'