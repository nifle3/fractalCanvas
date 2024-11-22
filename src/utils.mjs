import {state, ctx, height, width} from "./consts.mjs";


export var logDraw = (
    (callback) => () => {
        console.log(`draw start with ${state.iteration}`);
        callback();
        console.log("draw end");
    }
);

export var clearRect = (
    (callback) => () => {
        var startOfY = -1 * height;
        var startOfX = -1 * width;
        ctx.clearRect(startOfX, startOfY, width, height);
        callback();
    }
);