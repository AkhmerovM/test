class Singleton {
    static getInstance () {
        if (Singleton.instance === undefined) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
let singleton = Singleton.getInstance();
let singleton1 = Singleton.getInstance();
let singleton2 = Singleton.getInstance();
let singleton3 = Singleton.getInstance();
console.log(singleton);
console.log(singleton1);
console.log(singleton2);
console.log(singleton3);