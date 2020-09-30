import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('test user input equal to random number', (expect) => {

    const expected = 0;
    const actual = compareNumbers(5, 5);
    
    expect.equal(actual, expected);
});

test('test user input lower than random number', (expect) => {

    const expected = -1;
    const actual = compareNumbers(3, 5);
    
    expect.equal(actual, expected);
});

test('test user input higher than random number', (expect) => {

    const expected = 1;
    const actual = compareNumbers(7, 5);
    
    expect.equal(actual, expected);
});