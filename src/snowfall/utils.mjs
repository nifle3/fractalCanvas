/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export var generateNumber = (
    (min, max) => {
        return ((Math.random() * (max - min + 1)) + min);
    }
);

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export var generateInteger = (
    (min, max) => {
        var generatedNumber = generateNumber(min, max);
        return Math.floor(generatedNumber);
    }
);