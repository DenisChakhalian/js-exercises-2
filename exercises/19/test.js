function sort(arr) {
    return arr.sort((a, b) => a > b ? 1 : -1)
}

const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(sort(arr)); // [-4,1,2,3,3,5,6,7,8]