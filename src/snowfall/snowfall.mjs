import {createSnowflake} from "./snowflake.mjs";
import { generateNumber } from "./utils.mjs";
import { createWind } from "./wind.mjs";

/**
 * @constructor
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array<snowflake>} snowflakes  
 * @param {wind} wind
 */
function Snowfall(width, height, ctx, snowflakes, wind) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.snowflakes = snowflakes;
    this.wind = wind;
}

var snowfallPrototype = {
    start: (
        function() {
            this.clearFrame();
            this.doFrameOfAnimation();
            requestAnimationFrame(this.start.bind(this));
        }
    )
    , clearFrame: (
        function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    )
    , doFrameOfAnimation: (
        function() {
            var xSpeed = this.wind.getSpeed();
            this.snowflakes.forEach(value => {
                value.move(xSpeed);
                value.draw(this.ctx);
                if (value.isOutOfY(this.height)) {
                    value.moveToStart();
                }
            });;
        }
    )
};

Reflect.setPrototypeOf(Snowfall.prototype, snowfallPrototype);

/**
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} countSnowflakes
 * @returns {Snowfall}
 */
export var createSnowfall = (
    (width, height, ctx, countSnowflakes) => {
        var snowflakes = generateSnowflakes(countSnowflakes, width);
        var wind = createWind(120);
        var snowfall = new Snowfall(width, height, ctx, snowflakes, wind);
        return snowfall;
    }
);

/**
 * @param {number} count
 * @param {number} width
 * @returns {Array<snowflake>}
 */
var generateSnowflakes = (
    (count, width) => {
        var snowflakes = [];
        for (var i = 0; i < count; i++) {
            var y = 0;
            var x = generateNumber(-10, width+10);
            var snowflake = createSnowflake(x, y);
            snowflakes.push(snowflake);
        }
        return snowflakes;
    }
);