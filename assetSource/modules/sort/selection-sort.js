function selectionSort (array) {
    let start = performance.now();
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        let a = array[i];
        array[i] = array[min];
        array[min] = a;
    }
    let end = performance.now();
    let between = end - start;
    console.log(array);
    console.log('==========  Selection Sort time= ', between);
    return array;
}
export {selectionSort}