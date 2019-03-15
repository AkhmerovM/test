let a = 'a';
function first () {
    let b = 'b';
    return second();
}
function second () {
    let c = 'c';
    return third();
}
function third () {
    let d = 'd';
    return fourth();
}
function fourth () {
    let e = 'e';
    return a;
}

console.log(first());