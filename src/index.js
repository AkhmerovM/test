// @flow

//primitives
const a: number = 32;
const a1: number = Infinity;
const a2: number = NaN;
const b: string = 'ds';
const c: boolean = false;
const d: void = undefined;
const e: null = null;
const f: symbol = Symbol();

//literals
const type: 'submit' | 'password' | 'text' = 'password';

//mixed
function greeting(name: mixed) {
     if (typeof name === 'string') {
         return `Hello ${name}`;
     }
    return `Hello`;
}

//any
const any: any = {da: 'da'}

//maybeTypes
const q: ?string = null;

//variableTypes
const l: string = 'dsa';

//variableTypes
function asa(a: string): string {
    return a;
}
const asa2: (name: string) => void = (name) => {
    console.log(name);
}

//object types
//sealed
const obj: {da: string, fd: 'fd'} = {da: 'da', fd: 'fd'};
//unSealed
const obj1 = {};
obj1.dsaa = 'dsad';

//array types
const arr: Array<?number> = [1, 5,8, null, undefined];
const arr1: (?string)[] = ['1232', undefined, null];
const arr2: $ReadOnlyArray<?number> = [2,65,8, null];

//tuples
const tuple: [number, string, boolean] = [1,'dsa',false];

//classes
class MyClass {
    name: string;
    hi() {
        this.name = 'hi';
    }
}
class MyClass1<T> {
    name: T;
    setName(name: T) {
        this.name = name;
    }
}
const my = new MyClass1<string>();
my.setName('Max');
console.log(my);

// type aliases
type User<A, B> = {
    id: number,
    name: string,
    score: A,
    data: B,
}
type TScore = {
    value: number,
    rating: number,
}
const user:User<TScore, number> = {
    id: 11,
    name: 'Max',
    score: {
        value: 1,
        rating: 1,
    },
    data: 2,
};
// utility
type exactUser = $Exact<{
    name: string,
}>
const user1: exactUser = {name: 'Max'};

type age = {age: number, name: string};
type name = {name: string};
type diffName = $Diff<age, name>;
const aaa: diffName = {age: 11, name: 'sds', dsad: 'dsa'}