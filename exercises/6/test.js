function rm(arr, num = 1) {
    arr.splice(0,num);
    return arr
    // return arr.reduce((acc, el, idx) => {
    //     if (idx + 1 > num) {
    //         acc.push(el)
    //     }
    //     return acc
    // }, []);
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]

