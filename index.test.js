const { expect, test, jest:requiredJest } = require('@jest/globals');
const { fn } = require('jest-mock');
const {Ninja, Sensei} = require('./index');

test('creates Ninja', () => {
    const jase = new Ninja("Jase");
    expect(jase.name).toBe("Jase");
    expect(jase.health).toBe(100);
    expect(jase.speed).toBe(3);
    expect(jase.strength).toBe(3);
    expect(typeof jase.sayName).toBe(typeof function (){})
    expect(typeof jase.showStats).toBe(typeof function (){})
    expect(typeof jase.drinkShake).toBe(typeof function (){})
});

test('Ninja showStats Method', () => {
    const jase = new Ninja("Jase");
    expect(jase.showStats()).toBe("Name: Jase, strength: 3, speed: 3, health: 100")
})

test('Ninja drinkShake adds 10 health', () => {
    const jase = new Ninja("Jase");
    expect(jase.health).toBe(100);
    jase.drinkShake()
    expect(jase.health).toBe(110);
})

test('Sensei is iniated properly', () =>{
    const sensei = new Sensei("Jase")
    expect(sensei.name).toBe("Jase");
    expect(sensei.health).toBe(100);
    expect(sensei.speed).toBe(3);
    expect(sensei.strength).toBe(3);
    expect(sensei.wisdom).toBe(10);
    expect(typeof sensei.sayName).toBe(typeof function (){})
    expect(typeof sensei.showStats).toBe(typeof function (){})
    expect(typeof sensei.drinkShake).toBe(typeof function (){})
    expect(typeof sensei.speakWisdom).toBe(typeof function (){})
})

test('Function of Sensei.speakWisdom', ()=>{
    const sensei = new Sensei("Jase")
    expect(sensei.speakWisdom()).toBe("What one programmer can do in one month, two programmers can do in two months");
    expect(sensei.showStats()).toBe("Name: Jase, strength: 3, speed: 3, health: 110")
})
test('Function of Sensei.speakWisdom -> Call drinkShake Method', ()=>{
    const sensei = new Sensei("Jase")
    sensei.drinkShake = jest.fn();
    sensei.speakWisdom()
    expect(sensei.drinkShake).toHaveBeenCalled(); 
})