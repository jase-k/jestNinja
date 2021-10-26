const { expect, test } = require('@jest/globals');
const { fn } = require('jest-mock');
const Ninja = require('./index');

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