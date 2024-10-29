import { Battleship } from "./main";

const shipOne = new Battleship(5);
test('Counter for ship hits increases hit counter', () => {
    shipOne.hit();
    expect(shipOne.hits).toBe(1);
});
