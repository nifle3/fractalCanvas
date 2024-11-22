import {state} from "./consts";

export var logDraw = (
    (callback) => () => {
        console.log(`draw start with ${state}`);
        callback();
        console.log("draw end");
    }
);
