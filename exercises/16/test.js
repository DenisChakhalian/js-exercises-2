function findYear(fromYear, toYear) {
    let result = [];
    for (let i = fromYear; i <= toYear; i++) {
        if (new Date(i, 1, 29).getDate() === 29) {
            result.push(i);
        }
    }
    return result;
}

console.log(findYear(2000, 2018)); // [2000,2004,2008,2012,2016]