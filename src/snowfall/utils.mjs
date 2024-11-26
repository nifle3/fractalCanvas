/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export var generateNumber = (
    (min, max) => {
        return ((Math.random() * (max - min)) + min);
    }
);

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export var generateInteger = (
    (min, max) => {
        var generatedNumber = ((Math.random() * (max - min)) + min);
        return Math.floor(generatedNumber);  
    }
);