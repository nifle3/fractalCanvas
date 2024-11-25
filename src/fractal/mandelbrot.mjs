import { ctx, mandelbrotBtn, state } from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs";


var mandelbrot = (
    () => {
        console.log(state.iteration);
    }
);

mandelbrotBtn.addEventListener("click", 
    logDraw(clearRect(mandelbrot)));