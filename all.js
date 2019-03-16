function * generateSequence () {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}

const generator = generateSequence();
setInterval(() => {
    console.log(generator.next());
}, 1000);


function createCounter () {
    let counter = 0;
    function myFunction() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let a = 'a';
function first () {
    let b = 'b';
    console.log(1);
    return function second () {
        let c = 'c';
        console.log(2);
        return function third () {
            let d = 'd';
            console.log(3);
            return function fourth () {
                let e = 'e';
                console.log(a);
            }
        }
    }
}

first()()()();

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);