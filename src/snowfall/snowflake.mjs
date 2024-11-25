/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 */
function Snowflake(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
}

var snowflakePrototype = {
    move: (
        () => {
            this.y += this.speed;
        }
    ),
    draw: (
        (ctx) => {
            ctx.fillRect(this.x, this.y, 1, 1);
        }
    )
};

/** 
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @returns {Snowflake}
*/
export var createSnowflake = (
    (x, y, speed) => {
        var snowflake = new Snowflake(x, y, speed);
        var object = Object.setPrototypeOf(snowflake, snowflakePrototype);
        return object
    }
);