const { TestWatcher } = require('jest');
const {stringLength, reverseString, Calculator, capitalize} = require('./testing');
let long = stringLength('fernando');
let reverse = reverseString('fernando');


describe('TESTS', () => {
    test('Check the length', () => {
        expect(long).toBe(long);
        expect(long).toBeGreaterThan(1);
        expect(long).toBeLessThan(10);
    })
    
    test('Check the reverse', () => {
        expect(reverse).toBe('odnanref')
    })

    describe('CALCULATOR', () => {
        test('Sum', () => {
            expect(Calculator.sum(2,3)).toBe(5);
            expect(Calculator.sum(0.5,0.9)).toBe(1.4);
            expect(Calculator.sum(0,1)).toBe(1);
        })

        test('Substract', () => {
            expect(Calculator.substract(5,2)).toBe(3);
            expect(Calculator.substract(2,5)).toBe(-3);
            expect(Calculator.substract(5,-2)).toBe(7);
        })

        test('Multiply', () => {
            expect(Calculator.multiply(2,8)).toBe(16);
            expect(Calculator.multiply(-9,-5)).toBe(45);
            expect(Calculator.multiply(12,-8)).toBe(-96);
        })

        test('Divide', () => {
            expect(Calculator.divide(12,3)).toBe(4);
            expect(Calculator.divide(-45,5)).toBe(-9);
            expect(Calculator.divide(15,0)).toBe(Infinity);
        })
        
    })

    let capitalLetter = capitalize('fernando');
    
    describe('CAPITAL LETTER', () => {
        test('Capitalize', () => {
            expect(capitalLetter).toBe('Fernando');            
        })        

        test('Capitalize number', () => {
            if(typeof capitalLetter !== 'string'){
                expect(() => capitalize(capitalLetter)).toThrow('Error, The input must be a string');
            }
        });
    })
})