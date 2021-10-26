class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }

    drinkShake(){
        this.health += 10
    }
    sayName(){
        console.log("Jase")
    }
    showStats(){
        return `Name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`
    }
}
module.exports = Ninja;
