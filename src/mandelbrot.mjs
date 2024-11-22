import { ctx, mandelbrotBtn, state } from "./consts.mjs";

var mandelbrot = (
    () => {
        console.log(state.iteration);
    }
);

mandelbrotBtn.addEventListener("click", mandelbrot);