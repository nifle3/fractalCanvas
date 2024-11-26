import { Directions } from "./windDirection.mjs"

/**
 * @constructor
 * @param {number} frameToChangeDirection
 */
function Wind(frameToChangeDirection) {
    this.frameToChange = frameToChangeDirection;
    this.deltaFrame = 0;
}

var windPrototype = {
    getSpeed: (
        function() {
            this.deltaFrame += 1;
            if (this.deltaFrame >= this.frameToChange) {
                this.changeDirection();
            } 
            return 0
        }
    )
    , changeDirection: (
        function() {
            this.deltaFrame = 0;
            console.log("direction changed");
        }
    )
}

Reflect.setPrototypeOf(Wind.prototype, windPrototype);

/**
 * @param {number} frameToChangeDirection 
 * @returns {Wind}
 */
export var createWind = (
    (frameToChangeDirection) => {
        var wind = new Wind(frameToChangeDirection);
        return wind;
    }
);