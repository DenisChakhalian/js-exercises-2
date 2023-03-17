function init(arr) {
    arr.length--;
    return arr
}

const arr1 = [1, 2, 3, 4];

const arr2 = init(arr1);

console.log(arr2); // [1,2,3]