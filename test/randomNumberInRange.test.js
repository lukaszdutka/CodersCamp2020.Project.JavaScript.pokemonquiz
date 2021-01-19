import { randomNumberInRange } from '../src/service/randomNumberInRange'

describe('Test randomNumberInRange function', () => {

    it('Should return a number from 3 to 7', () => {

        //given
        const minimum = 3;
        const maximum = 7;


        //when 
        const randomNumber = randomNumberInRange(minimum, maximum);

        //then 
        expect(randomNumber).toBeLessThanOrEqual(7);
        expect(randomNumber).toBeGreaterThanOrEqual(3);
    });

    it('Should return a number from 0 to 5, but not 2 or 4', () => {

        //given
        const minimum = 0;
        const maximum = 5;
        const forbidden = [2, 4];

        //when 
        const randomNumber = randomNumberInRange(minimum, maximum, forbidden);

        //then 
        expect(randomNumber).toBeLessThanOrEqual(5);
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).not.toBe(2);
        expect(randomNumber).not.toBe(4);
    });

    it('Should return a number from -100 to 50', () => {

        //given
        const minimum = -100;
        const maximum = -50;

        //when 
        const randomNumber = randomNumberInRange(minimum, maximum);

        //then 
        expect(randomNumber).toBeLessThanOrEqual(-50);
        expect(randomNumber).toBeGreaterThanOrEqual(-100);
    });

    it('Should return an error when min is greater than max', () => {

        //given
        const minimum = 9;
        const maximum = 3;

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid arguments. Min is greated than max. Min - ${minimum}, max - ${maximum}`);
    });

    it('Should return an error when forbidden is not an array', () => {

        //given
        const minimum = 7;
        const maximum = 10;
        const forbidden = 8;

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}`);
    });

    it('Should return an error when in forbidden array there is sth that is not a number', () => {

        //given
        const minimum = 7;
        const maximum = 10;
        const forbidden = ['5'];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}`);
    });

    it('Should return an error when min is not a number', () => {

        //given
        const minimum = '7';
        const maximum = 10;
        const forbidden = [8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}`);
    });

    it('Should return an error when max is not a number', () => {

        //given
        const minimum = 7;
        const maximum = {max: 10};
        const forbidden = [8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}`);
    });

    it('Should return an error when every possible outcome is forbidden', () => {

        //given
        const minimum = 4;
        const maximum = 6;
        const forbidden = [5, 4, 6];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid array of forbidden numbers! All the possible outcomes are forbidden. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}.`);
    });

    it('Should return an error when every possible outcome is forbiddenn and forbidden array is longer than possible outcomes', () => {

        //given
        const minimum = 4;
        const maximum = 6;
        const forbidden = [4, 5, 6, 7];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError(`Invalid array of forbidden numbers! All the possible outcomes are forbidden. The arguments passed: min - ${minimum}, max - ${maximum}, forbiddenNumbersArray - ${forbidden}.`);
    });
});