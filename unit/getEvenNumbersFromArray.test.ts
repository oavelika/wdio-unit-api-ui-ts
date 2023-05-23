/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { NumbersValidator } from '../app/numbers-validator';

describe('getEvenNumbersFromArray', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    });

    afterEach(function () {
        validator = null;
    });

    it('Random arrayOfNumbers should return even numbers ', function () {
        const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function hasn't returned even numbers`).to.be.eql([2, 12, 32, 10]);
    });

    it('Random arrayOfNumbers should not return odd numbers', function () {
        const arrayOfRandomNumbers = [7, 17, 1, 55];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function has returned odd numbers`).to.be.an('array').that.is.empty;
    });

    it('If arrayOfNumbers contains even numbers should return array of even numbers', function () {
        const arrayOfRandomNumbers = [2, 12, 32, 10];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function hasn't returned array of even numbers`).to.eql([2, 12, 32, 10]);
    });

    it('If arrayOfNumbers contains only one even number', function () {
        const arrayOfRandomNumbers = [12];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function hasn't returned only one even number`).to.eql([12]);
    });

    it('If arrayOfNumbers contains only one odd number', function () {
        const arrayOfRandomNumbers = [13];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function has returned only one odd number`).to.be.an('array').that.is.empty;
    });

    it('If arrayOfNumbers empty', function () {
        const arrayOfRandomNumbers = [];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function has returned only one odd number`).to.be.an('array').that.is.empty;
    });

    it('Random arrayOfNumbers contains negative numbers should return even numbers ', function () {
        const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, -32, -10];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function hasn't returned even if contains negative numbers`).to.be.eql([2, 12, -32, -10]);
    });

    it('Should return empty array if arrayOfNumbers contains fractions', function () {
        const arrayOfRandomNumbers = [2.1, 7.5, 12.6, 17.1];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers), `The function hasn't returned empty if arrayOfNumbers contains fractions`).to.be.an('array').that.is.empty;
    });

    describe('getEvenNumbersFromArray negative tests', () => {
        let validator;

        beforeEach(function () {
            validator = new NumbersValidator();
        });

        afterEach(function () {
            validator = null;
        });

        it('should throw error when provided empty value', function () {
            expect(() => {
                validator.getEvenNumbersFromArray()`The function hasn't returned an error message if contains an empty value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when provided a string', function () {
            expect(() => {
                validator.getEvenNumbersFromArray('4')`The function hasn't returned an error message if contains a string value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when provided a null', function () {
            expect(() => {
                validator.getEvenNumbersFromArray(null)`The function hasn't returned an error message if contains a null value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when provided a undefined', function () {
            expect(() => {
                validator.getEvenNumbersFromArray(undefined)`The function hasn't returned an error message if contains an undefined value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when provided a boolean', function () {
            expect(() => {
                validator.getEvenNumbersFromArray(true)`The function hasn't returned an error message if contains a boolean value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when array contains a string', function () {
            expect(() => {
                validator.getEvenNumbersFromArray([2, 7, '12', 17, 1, '55', 32, 10])`The function hasn't returned an error message if contains an string array value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when array contains an object', function () {
            expect(() => {
                validator.getEvenNumbersFromArray([2, 7, 12, 17, 1, {}, 55, 32, 10])`The function hasn't returned an error message if contains an empty array value`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when array contains an inner array', function () {
            expect(() => {
                validator.getEvenNumbersFromArray([2, 7, 12, 17, 1, [2, 6, 5, 38], 55, 32, 10])`The function hasn't returned an error message if contains an array value with an inner array`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when array contains an inner empty object', function () {
            expect(() => {
                validator.getEvenNumbersFromArray([{}])`The function hasn't returned an error message if contains an empty array value with an inner empty object`;
            }).to.throw('is not an array of "Numbers"');
        });

        it('should throw error when array contains an empty object', function () {
            expect(() => {
                validator.getEvenNumbersFromArray({})`The function hasn't returned an error message if contains an empty object`;
            }).to.throw('is not an array of "Numbers"');
        });
    });
});
