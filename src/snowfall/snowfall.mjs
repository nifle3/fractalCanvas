import {createSnowflake} from "./snowflake.mjs";

/**
 * @constructor
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} countSnowflakes 
 */
function Snowfall(width, height, ctx, countSnowflakes) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.snowflakes = [];

    for (var i = 0; i < countSnowflakes; i++) {
        var y = 0;
        var x = Math.random() * this.width;
        var snowflake = createSnowflake(x, y, 10);
        this.snowflakes.push(snowflake);
    }
}

var snowfallPrototype = {
    start: (
        () => {
            this.doFrameOfAnimation();
            requestAnimationFrame(this.start);
        }
    ),
    doFrameOfAnimation: (
        () => {
            this.snowflakes.forEach(value => {
                value.move();
                value.draw(this.ctx);
            });
        }
    )
};

/**
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} countSnowflakes 
 * @returns {Snowfall}
 */
export var createSnowfall = (
    (width, height, ctx, countSnowflakes) => {
        var snowfall = new Snowfall(width, height, ctx, countSnowflakes);
        var object = Object.setPrototypeOf(snowfall, snowfallPrototype);
        return object;
    }
);