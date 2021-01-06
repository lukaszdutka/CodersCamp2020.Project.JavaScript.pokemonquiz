// min should be a minimal number, max should be a maximal number, forbiddenNumbersArray should be an array containing all the numbers that should not be generated

export const randomNumberInRange = (min, max, forbiddenNumbersArray = []) => {
    
    if (!(typeof min === 'number') || !(typeof max === 'number') || !(Array.isArray(forbiddenNumbersArray)) || !(forbiddenNumbersArray.every(number => typeof number === 'number'))) {
       
        throw Error('Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers.');

    } else if ((min >= max) || (max - min + 1) < forbiddenNumbersArray.length) {
        
        throw Error('Invalid array of forbidden numbers! All the possible outcomes are forbidden.');

    } else {

        const allPossibleOutComes = [];

        for (let i = min; i <= max; i++) {
            allPossibleOutComes.push(i);
        }

        const allPossibleOutComesNoProhibited = allPossibleOutComes.filter(number => !(forbiddenNumbersArray.includes(number)));

        if (allPossibleOutComesNoProhibited.length === 0) {

            throw Error('Invalid array of forbidden numbers! All the possible outcomes are forbidden.');

        } else {

            const generateIndex = () => {

                return Math.floor(Math.random() * (allPossibleOutComesNoProhibited.length - 1)); 
            }

            const numberIndex = generateIndex();

            return allPossibleOutComesNoProhibited[numberIndex];

        }
    }     
}
    