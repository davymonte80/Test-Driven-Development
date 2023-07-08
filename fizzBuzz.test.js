const fizzBuzz = require('./fizzBuzz');

test('accept a number & return it as a string', () => {
    expect(fizzBuzz(1)).toBe("1");
});

test('accept multiples of three & return Fizz', () => {
    expect(fizzBuzz(27)).toBe("Fizz");
});

test('accept multiples of five & return Buzz', () => {
    expect(fizzBuzz(25)).toBe("Buzz");
});

test('accept multiples of both five and three & return FizzBuzz', () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
});
