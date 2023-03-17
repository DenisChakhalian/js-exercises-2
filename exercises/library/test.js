//task 1 ----------------------------------------------------
function pluck(value) {
    return this.map(el => el[value])
}

//task 2 ----------------------------------------------------
function aCopy() {
    return this.map(el => Array.isArray(el) ?
        el.reduce((acc, itm) => Array.isArray(itm) ?
                acc : [...acc, itm]
            , []) : el)
}

//task 3 ----------------------------------------------------
function splitArray(size) {
    if (size <= 0) return [];
    if (size >= this.length) return [this];
    return this
        .reduce((acc, _, i) =>
                (i % size)
                    ? acc
                    : [...acc, this.slice(i, i + size)]
            , []);
}

//task 4 ----------------------------------------------------
function clearArray() {
    // return this.reduce((acc, el) => el ? [...acc, el] : acc, []);
    return this.filter(Boolean)
}

//task 5 ---------------------------------------------------- not in library
function concatArray(...params) {
    // return params.reduce((acc, el) => acc.concat(el), []);
    return this.concat(...params);
}

// const arr1 = [1];
// const arr2 = concatArray(arr1, 2, [3], [[4]]);
//
// console.log(arr2); // [1, 2, 3, [4]]
// console.log(arr1); // [1]

//task 6 ----------------------------------------------------
function rm1(num = 1) {
    this.splice(0, num);
    return this
    // return this.reduce((acc, el, idx) => {
    //     if (idx + 1 > num) {
    //         acc.push(el)
    //     }
    //     return acc
    // }, []);
}

//task 7 ----------------------------------------------------
function rm2(num = 1) {
    if (num !== 0) {
        this.splice(-num);
    }
    return this
    // return this.reduce((acc, el, idx) => {
    //     if (this.length - idx > num) {
    //         acc.push(el)
    //     }
    //     return acc
    // }, []);
}

//task 8 ----------------------------------------------------
function replaceIn(symbol, start = 0, end = this.length) {
    return this.map((el, idx) => (idx < start || idx > end) ? el : this[idx] = symbol);
}

//task 9 ----------------------------------------------------
function init() {
    this.length--;
    return this
}

//10 ----------------------------------------------------
function uni() {
    return this.reduce((acc, el, idx) => {
        if (this.slice(idx + 1).includes(el) && !acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}

//11 ----------------------------------------------------
function nfa(idx) {
    return idx < 0 ? this[this.length + idx] : this[idx];
}

//12 ---------------------------------------------------- not in library

// console.log(
//     [1, 4, 3, 0, 4, 5, 4].reduce((acc, el) => el % 2 ? acc : acc + Math.sqrt(el), 0)
// // тут ваш код
// ) // 6

//13 ---------------------------------------------------- not in library
function group(...arr) {
    // return arr
    //     .reduce((acc, el, idx, array) => idx < array[idx].length ?
    //         [...acc, array
    //             .reduce((acc, value, index, theArray) => theArray[index][idx] === undefined ?
    //                 acc :
    //                 [...acc, theArray[index][idx]], [])]
    //         : acc, []);

    let array = [];

    for (let i = 0; i < Math.max(...arr.reduce((acc, el) => [...acc, el.length], [])); i++) {
        array.push(arr.reduce((acc, value, index, theArray) => theArray[index][i] === undefined ?
            acc :
            [...acc, theArray[index][i]], []))
    }
    return array
}

// console.log(group(['a', 'b'], [1, 2], [true, false]));
// console.log(group(['a', 'b',"c"], [1, 2], [true, false],[6,7,8,9,10,11]));

//14 ----------------------------------------------------
function implode1(symbol) {
    return this.join(symbol)
}

//15 ----------------------------------------------------
function implode2(symbol, isEven) {
    return this.reduce((acc, el) => (!isEven === !!(el % 2)) ? [...acc, el] : acc, []).join(symbol)
}

//16 ---------------------------------------------------- not in library
function findYear(fromYear, toYear) {
    let result = [];
    for (let i = fromYear; i <= toYear; i++) {
        if (new Date(i, 1, 29).getDate() === 29) {
            result.push(i);
        }
    }
    return result;
}

// console.log(findYear(2000, 2018)); // [2000,2004,2008,2012,2016]

//17 ----------------------------------------------------
function rnd() {
    return this.reduce((acc, el) => {
        let random = Math.floor(Math.random() * this.length);
        while (acc[random]) {
            random = Math.floor(Math.random() * this.length);
        }
        acc[random] = el;
        return acc;
    }, []);
}

//18 ----------------------------------------------------
function diff(arr2) {
    // let was = [];
    // return this.concat(arr2).map((el, idx, arr) => {
    //     if (!arr.slice(idx + 1).includes(el) && !was.includes(el)) {
    //         return el
    //     }
    //     was.push(el);
    //
    // });
    let was = [];
    return this.concat(arr2).reduce((acc, el, idx, arr) => {
        if (!arr.slice(idx + 1).includes(el) && !was.includes(el)) {
            acc.push(el);
        } else {
            was.push(el);
        }
        return acc;
    }, []);
}

//19 ----------------------------------------------------
function sortMin() {
    return this.sort((a, b) => a > b ? 1 : -1)
}

//20  ----------------------------------------------------
function fn() {
    let maxProp = 0;
    let currentProp = 0;
    return this.reduce((acc, el, _, array) => {
        currentProp = array.reduce((acc, element) => element === el ? acc + 1 : acc, 0)
        if (maxProp <= currentProp) {
            maxProp = currentProp;
            acc = el;
        }
        return acc;
    });
}


//1 ----------------------------------------------------
Array.prototype.pluck = pluck;

// const chars = [
//     {'name': 'tony', 'age': 20},
//     {'name': 'feel', 'age': 30}
// ];
//
// console.log(chars.pluck('name'));

//2 ----------------------------------------------------
Array.prototype.aCopy = aCopy;

// const arr1 = [[1, 2], [3, 4]];
// const arr2 = arr1.aCopy();
//
// arr1.push([5, 6]);
//
// console.log(arr1); // [[1,2], [3,4], [5,6]]
// console.log(arr2); // [[1,2], [3,4]]
//
// const arr3 = [['a', 'b', 'c', 'd'], ['e', 'f'], ['g', 'h', 'i']];
// const arr4 = arr3.aCopy();
// const arr5 = [['a', ['a', 'b', ['a', 'b', 'c', 'd'], 'd'], 'c', 'd'], [['e', 'f'], 'f'], ['g', 'h', [['g', ['g', ['g', 'h', 'i'], 'i'], 'i'], 'h', ['g', 'h', 'i']]]];
// const arr6 = ['a', ['a', ['a', 'b', ['a', 'b', 'c', 'd'], 'd'], 'c', 'd'], [['e', 'f'], 'f'], ['g', 'h', [['g', ['g', ['g', 'h', 'i'], 'i'], 'i'], 'h', ['g', 'h', 'i']]]];
//
// arr3.unshift(['z']);
//
// console.log(arr3); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
// console.log(arr4); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
// console.log(arr5.aCopy());
// console.log(arr6.aCopy());

//3 ----------------------------------------------------
Array.prototype.splitArray = splitArray;

// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'].splitArray(2);
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'].splitArray(6);
// const arr3 = ['a', 'b', 'c', 'd', 'e', 'f'].splitArray(0);
// const arr4 = ['a', 'b', 'c', 'd', 'e', 'f'].splitArray(10);
// const arr5 = ['a', 'b', 'c', 'd', 'e', 'f'].splitArray(-5);
// const arr6 = ['1'].splitArray(10);
//
// console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
// console.log(arr2); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
// console.log(arr3); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
// console.log(arr4); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
// console.log(arr5); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
// console.log(arr6); // [['a', 'b'], ['c', 'd'], ['e', 'f']]

//4 ----------------------------------------------------
Array.prototype.clearArray = clearArray;

// const arr1 = [1, 0, 2, false, '', 3,"dfgsdfg"].clearArray();
//
// console.log(arr1); // [1, 2, 3]

//5 ----------------------------------------------------

Array.prototype.concatArray = concatArray;

// const arr1 = [1];
// const arr2 = arr1.concatArray(2, [3], [[4]]);
//
// console.log(arr2); // [1, 2, 3, [4]]
// console.log(arr1); // [1]

//6 ----------------------------------------------------
Array.prototype.rm1 = rm1;

// console.log([1, 2, 3].rm1()); // [2, 3]
//
// console.log([1, 2, 3].rm1(2)); // [3]
//
// console.log([1, 2, 3].rm1(5)); // []
//
// console.log([1, 2, 3].rm1(0)); // [1, 2, 3]

//7 ----------------------------------------------------
Array.prototype.rm2 = rm2;

// console.log([1, 2, 3].rm2()); // [1, 2]
//
// console.log([1, 2, 3].rm2(2)); // [1]
//
// console.log([1, 2, 3].rm2(5)); // []
//
// console.log([1, 2, 3].rm2(0)); // [1, 2, 3]

//8 ----------------------------------------------------
Array.prototype.replaceIn = replaceIn;

// const arr1 = [1, 2, 3];
//
// const arr1copy1 = arr1.replaceIn('a');
// console.log(arr1copy1); // ['a', 'a', 'a']
//
// const arr1copy2 = arr1.replaceIn(2);
// console.log(arr1copy2); // [2, 2, 2]
//
// const arr2 = [4, 6, 8, 10];
//
// const arr2copy1 = [4, 6, 8, 10].replaceIn('*', 1, 2);
// console.log(arr2copy1); // [4, '*', '*', 10]

//9 ----------------------------------------------------
Array.prototype.init = init;

// const arr1 = [1, 2, 3, 4];
//
// const arr2 = arr1.init();
//
// console.log(arr2); // [1,2,3]

//10 ----------------------------------------------------
Array.prototype.uni = uni;

// const arr1 = [1, 2, 3, 4, 2, 5, 6, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];
//
// const arr2 = arr1.uni();
//
// console.log(arr2); // [1,2,3]

//11 ----------------------------------------------------
Array.prototype.nfa = nfa;

// const arr = ['a', 'b', 'c', 'd'];
//
// console.log(arr.nfa(1)); // 'b'
// console.log(arr.nfa(-2)); // 'c';

//14 ----------------------------------------------------
Array.prototype.implode1 = implode1;

// const arr = ['a','b','c'];
//
// const arr2 = ['aaaaa','bbb','ccccccccccc',"3sdfgcsdfgsdf4","1sdfgsdfgdfg2"];
//
// console.log(arr.implode1('-')); // 'a-b-c'
// console.log(arr2.implode1('*')); // 'a-b-c'

//15 ----------------------------------------------------
Array.prototype.implode2 = implode2;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.implode2(':', true)); // '2:4:6:8'
// console.log("next")
// console.log(arr.implode2('*', false)); // '1*3*5*7*9'

//17 ----------------------------------------------------
Array.prototype.rnd = rnd;

// console.log([1, 2, 3, 4, 5, 6].rnd()); // [6,1,5,4,3,2]

//18 ----------------------------------------------------
Array.prototype.diff = diff;

// const arr1 = [1, 2, 'a'];
// const arr2 = [1, 2, 3, 4, 'b'];
//
// console.log(arr1.diff(arr2)) // [a,3,4,b]

//19 ----------------------------------------------------
Array.prototype.sortMin = sortMin;

// const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
//
// console.log(arr.sortMin()); // [-4,1,2,3,3,5,6,7,8]

//20 ----------------------------------------------------
Array.prototype.fn = fn;

// const arr = [7, 'a', 'a', 'a', 3, 7, 'a', 7, 'a', 3, 5, 9, 7];
// const arr2 = [8, 8, 8, 5, 5, 5];
//
// console.log(arr.fn()); // 'a'
// console.log(arr2.fn()); // 5 (my test)