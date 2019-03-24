class CarBuilder {
    isHasSunroof;
    countDoors;
    countWheels;
    getDoors() {
        return this.countDoors;
    };
    setDoors(count) {
        this.countDoors = count;
    };
    getWheels() {
        return this.countWheels;
    };
    setWheels(count) {
        this.countWheels = count;
    };

    getIsHasSunroof() {
        return this.isHasSunroof;
    };
    setIsHasSunroof(value) {
        this.isHasSunroof = value;
    };
}
class BmwBuilder extends  CarBuilder{
    build() {
        return new Bmw(this);
    }
}



class Car {
    constructor(builder) {
        this.countDoors = builder.getDoors();
        this.countWheels = builder.getWheels();
        this.isHasSunroof = builder.getIsHasSunroof();
    }
    isHasSunroof;
    countDoors;
    countWheels;
    getDoors() {
        return this.countDoors;
    };
    setDoors(count) {
        this.countDoors = count;
    };
    getWheels() {
        return this.countWheels;
    };
    setWheels(count) {
        this.countWheels = count;
    };

    getIsHasSunroof() {
        return this.isHasSunroof;
    };
    setIsHasSunroof(value) {
        this.isHasSunroof = value;
    };
}
class Bmw extends Car {

}
class Lada extends Car {

}
function main () {
    let carBmwBuild = new BmwBuilder();
    carBmwBuild.setDoors(4);
    carBmwBuild.setWheels(4);
    carBmwBuild.setIsHasSunroof(true);
    let bmwCar = carBmwBuild.build();
    console.log(bmwCar);
}
main();