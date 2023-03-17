function rm(arr, num = 1) {
    if (num !== 0) {
        arr.splice(-num);
    }
    return arr
    // return arr.reduce((acc, el, idx) => {
    //     if (arr.length - idx > num) {
    //         acc.push(el)
    //     }
    //     return acc
    // }, []);
}

console.log(rm([1, 2, 3])); // [1, 2]

console.log(rm([1, 2, 3], 2)); // [1]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]