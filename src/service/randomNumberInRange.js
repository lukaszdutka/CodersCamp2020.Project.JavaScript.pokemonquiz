// min should be a minimal number, max should be a maximal number, forbiddenNumbersArray should be an array containing all the numbers that should not be generated

export const randomNumberInRange = (min, max, forbiddenNumbersArray = []) => {
    
    if (typeof min === 'number' && typeof max === 'number' && Array.isArray(forbiddenNumbersArray) && min <= max) {

        // check if not every possible number is forbidden
        if (max - min + 1 === forbiddenNumbersArray.length) {

            const allPossibleOutComes = [];

            for (let i = min; i <= max; i++) {
                allPossibleOutComes.push(i);
            }

            const allPossibleOutComesSorted = allPossibleOutComes.sort((a, b) => {return a-b});
            const forbiddenNumbersArraySorted = forbiddenNumbersArray.sort((a, b) => {return a-b});

            if  (allPossibleOutComesSorted.every((val, index) => val === forbiddenNumbersArraySorted[index])) {
                throw Error('Invalid arguments!')
            }
        }
        
        // generate numbers

        const generateNumber = () => {
            return Math.floor(Math.random() * (max - min) + min); 
         }
         
         let randomNumber = generateNumber();

         // check if a generated number is not included in a forbidden numbers
     
         while (forbiddenNumbersArray.includes(randomNumber)) {
             randomNumber = generateNumber();
         }
     
         return randomNumber; 

    } else {
        
        throw Error('Invalid arguments!')
    }
}