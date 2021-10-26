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
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkShake()
        return "What one programmer can do in one month, two programmers can do in two months"
    }
}
module.exports = {Ninja, Sensei};
