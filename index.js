

// function apply(func, context) {
//     context.asd = func;
//     context.asd();
//     context.asd = null;
// };
function sayHi () {
    console.log(this);
}
let user = {
  name: 'Valera',
};
// apply(sayHi, user);
sayHi.apply(user)();
// sayHi.apply(user);
// console.log(user.__proto__);
// console.log(user.prototype.name);
// Object.keys(user).map((elem) => {
//     console.log(elem);
// });
// for (let propName in user) {
//     propValue = user[propName];
//     console.log(propName, propValue);
// }

// function bind(func, context) {
//     return function() {
//         return func();
//     };
// }

// function sumArgs() {
//     const reduce = [].reduce;
//     return reduce.call(arguments, (sum, elem) => {
//        return sum + elem;
//     }, 0);
// }
// let a = sumArgs(1, 2, 3);
// console.log(a);
// // console.log(sumArgs(1, 2, 3));
//
// const user = {
//     name: 'Valera',
//     sayHi: function () {
//         console.log(context);
//     }
// };
//
// bind(user.sayHi, user)();

// const ar = user.sayHi;
// user.sayHi();
// ar();

// user.sayHi();// user.sayHi.call(user)
// console.log(user.sayHi);
// user.sayHi();
// setTimeout(user.sayHi, 1000);
// setTimeout(function() {user.sayHi()}, 1000);

// callback.call(setTimeout)

//
//
// function person () {
//     return function payGame () {
//         console.log(this);
//     }
// }
// let a = new person();
// a();


// function la () {
//     function da () {
//         function asd () {
//             function asda () {
//                 function fff () {
//                     console.log(this);
//                 }
//                 fff();
//             }
//             asda();
//         }
//         asd();
//     }
//     da();
// }
// la();

// function t() {
//     this.t1 = function () {
//         console.log(this);
//     }
// }
//
// const n = new t();
//
// console.log(n);
//
// n.t1();