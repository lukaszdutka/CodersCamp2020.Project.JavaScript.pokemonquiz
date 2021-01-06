import { randomNumberInRange } from './randomNumberInRange'

describe('Test randomNumberInRange function', () => {

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

    it('Should return a number from -100 to 50, but not 8', () => {

        //given
        const minimum = -100;
        const maximum = 50;
        const forbidden = [8];

        //when 
        const randomNumber = randomNumberInRange(minimum, maximum, forbidden);

        //then 
        expect(randomNumber).toBeLessThanOrEqual(50);
        expect(randomNumber).toBeGreaterThanOrEqual(-100);
        expect(randomNumber).not.toBe(8);
    });

    it('Should return a random number from 7 to 41', () => {

        //given
        const minimum = 7;
        const maximum = 41;

        //when 
        const randomNumber = randomNumberInRange(minimum, maximum);

        //then 
        expect(randomNumber).toBeLessThanOrEqual(41);
        expect(randomNumber).toBeGreaterThanOrEqual(7);
    });

    it('Should return an error when min is greater than max', () => {

        //given
        const minimum = 9;
        const maximum = 3;
        const forbidden = [8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError('Invalid arguments!');
    });

    it('Should return an error when forbidden is not an array', () => {

        //given
        const minimum = 7;
        const maximum = 10;
        const forbidden = 8;

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError('Invalid arguments!');
    });

    it('Should return an error when min is not a number', () => {

        //given
        const minimum = '7';
        const maximum = 10;
        const forbidden = [8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError('Invalid arguments!');
    });

    it('Should return an error when max is not a number', () => {

        //given
        const minimum = 7;
        const maximum = {max: 10};
        const forbidden = [8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError('Invalid arguments!');
    });

    it('Should return an error when every possible outcome is forbiddenn', () => {

        //given
        const minimum = 4;
        const maximum = 8;
        const forbidden = [7, 5, 6, 4, 8];

        //when 
        const randomNumberInvoke = () => {randomNumberInRange(minimum, maximum, forbidden);} 

        //then 
        expect(randomNumberInvoke).toThrowError('Invalid arguments!');
    });
});