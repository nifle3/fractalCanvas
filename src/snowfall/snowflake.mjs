import { generateNumber } from "./utils.mjs";

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} speed
 */
function Snowflake(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
}

var snowflakePrototype = {
    move: (
        function(xSpeed) {
            this.y += this.speed;
            this.x += xSpeed;
        }
    )
    , draw: (
        function(ctx) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    )
    , isOutOfY: (
        function(height) {
            return this.y > height;
        }
    )
    , moveToStart: (
        function() {
            this.y = 0;
        }
    )
    , isOutOfX: (
        function(xStart, xEnd) {
            return ((this.x < xStart) || (this.x > xEnd));
        }
    )
    , moveToAnotherSide: (
        function(xStart, xEnd) {
            if (this.x < xStart) {
                this.x = xEnd;
                return;
            }

            this.x = xStart;
        }
    )
};

Reflect.setPrototypeOf(Snowflake.prototype, snowflakePrototype);

/** 
 * @param {number} x
 * @param {number} y
 * @returns {Snowflake}
*/
export var createSnowflake = (
    (x, y) => {
        var width = generateNumber(3, 10);
        var height = generateNumber(3, 10);
        var speed = generateNumber(0.1, 2);
        var snowflake = new Snowflake(x, y, width, height, speed);
        return snowflake;
    }
);