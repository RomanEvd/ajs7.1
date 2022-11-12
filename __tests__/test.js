import Validator from "../index.js";

test('Positive check for correct Username', () => {
    const name = new Validator();
    expect(name.validateUsername('Dragon')).toBe('Username is allowed');
});

test('Negative check for Username that starts with "-"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('-dragon'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that starts with digit', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('1dragon'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that starts with "_"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('_dragon'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username contains more than 3 digits in turn', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('drag0000n'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on "-"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('dragon-'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on digit', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('dragon1'); }).toThrow('Error: Please follow the Username guide.');
});

test('Negative check for Username that ends on "_"', () => {
    const name = new Validator();
    expect(() => { name.validateUsername('dragon_'); }).toThrow('Error: Please follow the Username guide.');
});