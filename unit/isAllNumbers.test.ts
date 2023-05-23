import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { NumbersValidator } from '../app/numbers-validator';

describe('isAllNumbers', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    });

    afterEach(function () {
        validator = null;
    });

    it('should return true if arrayOfNumbers contains numbers', function () {
        const arrayOfRandomNumbers = [2, 7, 12, 17, 2, 55, 32, 10];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value contains numbers`).to.be.eql(true);
    });

    it('should return false if arrayOfNumbers contains a string', function () {
        const arrayOfRandomNumbers = [7, '17', 1, 55];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains a string`).to.be.eql(false);
    });

    it('should return true if arrayOfNumbers contains only one number', function () {
        const arrayOfRandomNumbers = [12];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value contains only one number`).to.eql(true);
    });

    it('should return true if arrayOfNumbers empty', function () {
        const arrayOfRandomNumbers = [];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value is empty`).to.eql(true);
    });

    it('should return false if arrayOfNumbers contains fractions', function () {
        const arrayOfRandomNumbers = [2.1, 7.5, 2, 7, 12, 17, 12.6, 17.1];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains fractions`).to.eql(true);
    });

    it('should return false if arrayOfNumbers contains an object', function () {
        const arrayOfRandomNumbers = [[2, 7, 12, 17, 1, {}, 55, 32, 10]];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains an empty object`).to.eql(false);
    });

    it('should return false if arrayOfNumbers contains an array', function () {
        const arrayOfRandomNumbers = [[2, 7, 12, 17, 1, [2, 6, 5, 38], 55, 32, 10]];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains an array`).to.eql(false);
    });

    it('should return false if arrayOfNumbers contains an inner array', function () {
        const arrayOfRandomNumbers = [[2, 7, 12, 17, 1, [2, 6, 5, 38], 55, 32, 10]];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains an inner array`).to.eql(false);
    });

    it('should return false if arrayOfNumbers contains an object inside an array', function () {
        const arrayOfRandomNumbers = [[{}]];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned FALSE if value contains an empty object inside an empty array`).to.eql(false);
    });

    it('should return true if arrayOfNumbers contains negatives numbers', function () {
        const arrayOfRandomNumbers = [2, 7, -12, 17, -1, 55, 32, -10];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value contains negatives numbers`).to.eql(true);
    });

    it('should return true if arrayOfNumbers contains irrationals', function () {
        const arrayOfRandomNumbers = [2, 7, 13 / 5, 17, 1, 3, 32, 10, 20 / 6];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value contains irrationals`).to.eql(true);
    });

    it('should return true if arrayOfNumbers contains zero', function () {
        const arrayOfRandomNumbers = [2, 7, 0, 17, 1, 0, 32, 10, 0];
        expect(validator.isAllNumbers(arrayOfRandomNumbers), `The function hasn't returned TRUE if value contains zero`).to.eql(true);
    });

    describe('isAllNumbers negative tests', () => {
        let validator;

        beforeEach(function () {
            validator = new NumbersValidator();
        });

        afterEach(function () {
            validator = null;
        });

        it('should throw error when provided a string', function () {
            expect(() => validator.isAllNumbers('4'), `The function hasn't returned an error message if contains a string`).to.throw('is not an array');
        });

        it('should throw error when provided an empty value', function () {
            expect(() => validator.isAllNumbers(), `The function hasn't returned an error message if contains an empty value`).to.throw('is not an array');
        });

        it('should throw error when provided a null', function () {
            expect(() => validator.isAllNumbers(null), `The function hasn't returned an error message if contains a null`).to.throw('is not an array');
        });

        it('should throw error when provided undefined', function () {
            expect(() => validator.isAllNumbers(undefined), `The function hasn't returned an error message if contains an undefined value`).to.throw('is not an array');
        });

        it('should throw error when provided boolean', function () {
            expect(() => validator.isAllNumbers(true), `The function hasn't returned an error message if contains a boolean value`).to.throw('is not an array');
        });
    });
});
