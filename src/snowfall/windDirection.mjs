import { generateInteger } from "./utils.mjs";

export var Directions = Object.freeze({
    LEFT: -1,
    STAY: 0,
    RIGHT: 1,
});

export var generateRandomDirections = (
    () => {
        return generateInteger(Directions.STAY, Directions.RIGHT);
    }
);