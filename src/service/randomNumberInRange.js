// min should be a minimal number, max should be a maximal number, forbiddenNumbersArray should be an array containing all the numbers that should not be generated

export const randomNumberInRange = (min, max, forbiddenNumbersArray = []) => {
    
    if (typeof min !== 'number' || typeof max !== 'number' || !Array.isArray(forbiddenNumbersArray) || !forbiddenNumbersArray.every(number => typeof number === 'number')) {
       
        throw Error(`Invalid argument type! The first and the second argument should be numbers, the third should be an array of only numbers. The arguments passed: min - ${min}, max - ${max}, forbiddenNumbersArray - ${forbiddenNumbersArray}`);

    } 
    
    if (min > max) {
        
        throw Error(`Invalid arguments. Min is greated than max. Min - ${min}, max - ${max}`);

    }  

    const allPossibleOutcomes = [];

    for (let i = min; i <= max; i++) {
        allPossibleOutcomes.push(i);
    }

    const allPossibleOutcomesNoProhibited = allPossibleOutcomes.filter(number => !(forbiddenNumbersArray.includes(number)));

    if (allPossibleOutcomesNoProhibited.length === 0) {

        throw Error(`Invalid array of forbidden numbers! All the possible outcomes are forbidden. The arguments passed: min - ${min}, max - ${max}, forbiddenNumbersArray - ${forbiddenNumbersArray}.`);

    }  

    const generateIndex = () => {

        return Math.floor(Math.random() * allPossibleOutcomesNoProhibited.length); 
    }

    const numberIndex = generateIndex();

    return allPossibleOutcomesNoProhibited[numberIndex];
  
}     
    