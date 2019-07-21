function quickSort (A) {
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++)
    { if (A[ i ] < p) a[a.length] = A[ i ];
    else b[b.length] = A[ i ];
    }
    return quickSort(a).concat( p,quickSort(b) );
}

function quickSortDecorator (array) {
    let start = performance.now();

    array = quickSort(array);

    let end = performance.now();
    let between = end - start;
    console.log(array);
    console.log('==========  Quick Sort time= ', between);

}
export {quickSortDecorator as quickSort1}
