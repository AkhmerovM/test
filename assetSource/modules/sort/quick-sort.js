function quickSort (array) {
    if (!array.length) {
        return [];
    }
    const first = array[0];
    const less = array.filter(item => item < first);
    const more = array.filter(item => item > first);
    return  quickSort(less).concat(first, quickSort(more));
}

function quickSortDecorator (array) {
    let start = performance.now();

    array = quickSort(array);

    let end = performance.now();
    let between = end - start;
    console.log(array);
    console.log('==========  Quick Sort time= ', between);

}
export {quickSortDecorator as quickSort}
