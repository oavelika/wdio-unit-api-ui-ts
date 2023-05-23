import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { NumbersValidator } from '../app/numbers-validator';

describe('isInteger', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    });

    afterEach(function () {
        validator = null;
    });

    it('should return true if value is number', function () {
        expect(validator.isInteger(2), `The function hasn't returned TRUE if value is a number`).to.be.equal(true);
    });

    it('should return true if value is negative number', function () {
        expect(validator.isInteger(-2), `The function hasn't returned TRUE if value is a negative number`).to.be.equal(true);
    });

    it('should return FALSE if value is an irrational number', function () {
        expect(validator.isInteger(20 / 6), `The function hasn't returned TRUE if value is an irrational number`).to.be.equal(false);
    });

    it('should return true if value is a zero number', function () {
        expect(validator.isInteger(0), `The function hasn't returned TRUE if value is a zero number`).to.be.equal(true);
    });

    it('should return false if value is a fractions number', function () {
        expect(validator.isInteger(1.5), `The function hasn't returned FALSE if value is a fractions number`).to.be.equal(false);
    });

    describe('isInteger negative tests', () => {
        let validator;

        beforeEach(function () {
            validator = new NumbersValidator();
        });

        afterEach(function () {
            validator = null;
        });

        it('should throw error when provided a string', function () {
            expect(() => validator.isInteger('4'), `The function hasn't returned an error message if contains a string`).to.throw('is not a number');
        });

        it('should throw error when provided a null', function () {
            expect(() => validator.isInteger(null), `The function hasn't returned an error message if contains a null`).to.throw('is not a number');
        });

        it('should throw error when provided an undefined', function () {
            expect(() => validator.isInteger(undefined), `The function hasn't returned an error message if contains a undefined`).to.throw('is not a number');
        });

        it('should throw error when provided boolean', function () {
            expect(() => validator.isInteger(true), `The function hasn't returned an error message if contains a boolean`).to.throw('is not a number');
        });

        it('should throw error when provided an empty array', function () {
            expect(() => validator.isInteger([]), `The function hasn't returned an error message if contains a an empty array`).to.throw('is not a number');
        });

        it('should throw error when provided an empty object', function () {
            expect(() => validator.isInteger({}), `The function hasn't returned an error message if contains a an empty object`).to.throw('is not a number');
        });

        it('should throw error when provided an empty value', function () {
            expect(() => validator.isInteger(), `The function hasn't returned an error message if contains a an empty value`).to.throw('is not a number');
        });

        it('should throw error when provided an array', function () {
            expect(() => validator.isInteger([2, 7, 3, 6]), `The function hasn't returned an error message if contains an array`).to.throw('is not a number');
        });
    });
});
