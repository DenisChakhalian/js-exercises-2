function nfa(arr, idx) {
    return idx<0?arr[arr.length+idx]:arr[idx];
}

const arr = ['a', 'b', 'c', 'd'];

console.log(nfa(arr, 1)); // 'b'
console.log(nfa(arr, -2)); // 'c';