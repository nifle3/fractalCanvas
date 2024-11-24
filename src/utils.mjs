import {state, ctx, translateX, translateY, width, height} from "./consts.mjs";


export var logDraw = (
    (callback) => () => {
        console.log(`draw start with ${state.iteration}`);
        callback();
        console.log("draw end");
    }
);

export var clearRect = (
    (callback) => () => {
        var startOfY = -1 * (height/2);
        var startOfX = -1 * (width/2);
        ctx.clearRect(startOfX, startOfY, width, height);
        callback();
    }
);

export var checkValidIteration = (
    (callback, iteration) => {
        if (state.iteration < 0) {
            alert(`iteration must be greater than 0, now equals ${state.iteration}`);
            return;
        }

        if (!Number.isInteger(state.iteration)) {
            alert("iteration must be a number");
            return;
        }
        
        if (state.iteration >= iteration) {
            alert(`iteration must be lower than ${iteration}, now equals ${state.iteration}`);
            return;
        }

        callback();
    }
);