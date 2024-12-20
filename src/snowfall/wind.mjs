import { generateNumber } from "./utils.mjs";
import { Directions, generateRandomDirections } from "./windDirection.mjs"

/**
 * @constructor
 * @param {number} frameToChangeDirection
 */
function Wind(frameToChangeDirection) {
    this.frameToChange = frameToChangeDirection;
    this.deltaFrame = 0;
    this.currentDirection = Directions.STAY;
    this.speed = 0.1;
}

var windPrototype = {
    getSpeed: (
        function() {
            this.deltaFrame += 1;
            if (this.deltaFrame >= this.frameToChange) {
                this.changeDirectionAndSpeed();
                return this.calculateSpeed();
            } 
            
            return this.calculateSpeed();
        }
    )
    , changeDirectionAndSpeed: (
        function() {
            this.deltaFrame = this.generateNewDeltaFrame();

            this.currentDirection = generateRandomDirections();
            this.speed = generateNumber(0.1, 10);

            console.log(`direction changed to ${this.currentDirection}`);
        }
    )
    , calculateSpeed() {
        return this.currentDirection * this.speed;
    }
    , generateNewDeltaFrame: (
        function() {
            var deltaFrameToChange = generateNumber((-1 * this.frameToChange), 100);
            return deltaFrameToChange;
        }   
    )
    ,
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