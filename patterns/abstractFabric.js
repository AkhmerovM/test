class FurnitureFabric {
    constructor({name}) {
        this.name = name;
    }
    name;
    sellChair() {};
    sellSofa() {};
}
class ModernFabric extends FurnitureFabric {
    sellChair({color,weight}) {
        return new ModernChair(color, weight);
    }
    sellSofa({color,weight}) {
        return new ModernSofa(color, weight);
    }
}
class VictorianFabric extends FurnitureFabric {
    sellChair({color,weight}) {
        return new VicrorianChair({color, weight});
    }
    sellSofa({color,weight}) {
        return new VictorianSofa(color, weight);
    }
}
class Chair {
    constructor({color, weight}) {
        this.color = color;
        this.weight= weight;
    }
}
class VicrorianChair extends Chair {

}
class ModernChair extends Chair {

}
class Sofa {
    constructor({color, weight}) {
        this.color = color;
        this.weight= weight;
    }
    sell(){};
}
class VictorianSofa extends Sofa {

}
class ModernSofa extends Sofa {
}
let fabric1 = new VictorianFabric({name: 'da'});
let chair1 = fabric1.sellChair({color: 'green',weight: 2000});
console.log(chair1);