// @flow
// let array: Array<?string> = [undefined , null,'1, 2,3 ,5, 6,', 'dfs'];
// let arrrr: (?number)[] = [3, undefined, 2,54, 45, 56, 5,5 , null, 5];

let text = document.querySelector('.first');
let input = document.querySelector('.second');
class EventEmitter {
    events = {};
    subscribe = (eventName, callback) => {
        if (!this.events.eventName) {
            this.events.eventName= [];
        }
        this.events.eventName.push(callback);
    };
    emit = (eventName, data) => {
        this.events.eventName.forEach((fn) => {
            fn.call(null, data);
        })
    }
}

const emitter = new EventEmitter();
emitter.subscribe('change', (data) => {
    console.log('AAAA, он нажал ', data, ' раз');
});
console.log(input);
input.addEventListener('change', (e) => {
    emitter.emit('change', e.target.value);
});
