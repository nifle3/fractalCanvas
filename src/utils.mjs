import {state} from "./consts.mjs";

export var logDraw = (
    (callback) => () => {
        console.log(`draw start with ${state}`);
        callback();
        console.log("draw end");
    }
);
