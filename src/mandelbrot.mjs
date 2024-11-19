import { ctx, mandelbrotBtn } from "./consts.mjs";

var mandelbrot = (
    () => {
        console.log("mandelbrot hello");
    }
);

mandelbrotBtn.addEventListener("click", mandelbrot);