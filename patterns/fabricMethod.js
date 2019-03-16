class Fruit {
    constructor ({color, weight}) {
        this.color = color;
        this.weight = weight;
    }
    weight;
    color;
}

class Apple extends Fruit {

}
class Orange extends Fruit {

}
class Shop {
    constructor ({name}) {
        this.name = name;
    }
    name;
    sell() {};
}

class AppleMarket extends Shop{
    sell({color, weight}) {
        return new Apple({color, weight});
    }
}

class OrangeMarket extends Shop {
    sell({color, weight}) {
        return new Orange({color, weight});
    }
}
let orangeMarket = new OrangeMarket({name: 'first'});
let appleMarket = new AppleMarket({name: 'first'});
let orange1 = orangeMarket.sell({color: 'orange',weight:  300});
let apple1 = appleMarket.sell({color: 'green',weight:  400});

console.log(orange1);
console.log(apple1);