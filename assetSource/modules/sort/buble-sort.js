function bubleSort (array) {
    let start = performance.now();
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[i] < array[j] &&  i !== j) {
                let a = array[i];
                array[i] = array[j];
                array[j] = a;
            }
        }
    }
    let end = performance.now();
    let between = end - start;
    console.log(array);
    console.log('==========  Buble Sort time= ', between);
    return array;
}
export {bubleSort}