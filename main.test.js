import { Battleship } from "./main";

test('Counter for ship hits increases hit counter', () => {
    const shipOne = new Battleship(5);
    shipOne.hit();
    expect(shipOne.hits).toBe(1);
});

test('If Battleship.length is equal to Battleship.hits, Battleship.sunk should be true', () => {
    const shipOne = new Battleship(1);
    shipOne.hit();
    expect(shipOne.isSunk()).toBe(true);
});
