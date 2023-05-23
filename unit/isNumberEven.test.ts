import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { NumbersValidator } from '../app/numbers-validator';

describe('isNumberEven positive tests', () => {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    });

    afterEach(function () {
        validator = null;
    });

    it('should return true when provided with an even number', () => {
        expect(validator.isNumberEven(4), `The function hasn't returned TRUE if value is a even number`).to.be.equal(true);
    });

    it('should return false when provided with an odd number', () => {
        expect(validator.isNumberEven(7), `The function hasn't returned FALSE if value is an odd number`).to.be.equal(false);
    });

    it('should return false if number is a negative number', () => {
        expect(validator.isNumberEven(-7), `The function hasn't returned FALSE if value is a negative number`).to.be.equal(false);
    });

    it('should return true if number is irrational', () => {
        expect(validator.isNumberEven(20 / 6), `The function hasn't returned TRUE if value is a number`).to.be.equal(false);
    });

    it('should return true if value is zero number', function () {
        expect(validator.isNumberEven(0), `The function hasn't returned TRUE if value is a zero number`).to.be.equal(true);
    });

    it('should return false if value is fractions number', function () {
        expect(validator.isNumberEven(1.5), `The function hasn't returned TRUE if value is a fractions number`).to.be.equal(false);
    });

    it('should return false if number is NaN', () => {
        expect(validator.isNumberEven(NaN), `The function hasn't returned FALSE if value is a NaN`).to.be.equal(false);
    });

    it('should return FALSE if value is irrational number', function () {
        expect(validator.isNumberEven(20 / 6), `The function hasn't returned FALSE if value is a irrational number`).to.be.equal(false);
    });

    describe('isNumberEven negative tests', () => {
        let validator;

        beforeEach(function () {
            validator = new NumbersValidator();
        });

        afterEach(function () {
            validator = null;
        });

        it('should throw error when provided a string', function () {
            expect(() => validator.isNumberEven('4'), `The function hasn't returned an error message if contains a string`).to.throw('is not of type "Number" it is of type "string"');
        });

        it('should throw error when provided a null', function () {
            expect(() => validator.isNumberEven(null), `The function hasn't returned an error message if contains a null`).to.throw('is not of type "Number" it is of type "object"');
        });

        it('should throw error when provided an array', function () {
            expect(() => validator.isNumberEven([4, 3, 5]), `The function hasn't returned an error message if contains an array`).to.throw('is not of type "Number" it is of type "object"');
        });

        it('should throw error when provided undefined', function () {
            expect(() => validator.isNumberEven(undefined), `The function hasn't returned an error message if contains an undefined`).to.throw('is not of type "Number" it is of type "undefined"');
        });

        it('should throw error when provided boolean', function () {
            expect(() => validator.isNumberEven(true), `The function hasn't returned an error message if contains a boolean`).to.throw('is not of type "Number" it is of type "boolean"');
        });

        it('should throw error when provided an empty object', function () {
            expect(() => validator.isNumberEven({}), `The function hasn't returned an error message if contains an empty object`).to.throw('is not of type "Number" it is of type "object"');
        });

        it('should throw error when provided an empty array', function () {
            expect(() => validator.isNumberEven([]), `The function hasn't returned an error message if contains an empty array`).to.throw('is not of type "Number" it is of type "object"');
        });

        it('should throw error when provided an empty value', function () {
            expect(() => validator.isNumberEven(), `The function hasn't returned an error message if contains an empty value`).to.throw('is not of type "Number" it is of type "undefined"');
        });
    });
});

