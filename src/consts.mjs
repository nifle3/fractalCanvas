var canvas = document.querySelector("#canvas")
export var ctx  = canvas.getContext("2d");
export var iterInput = document.querySelector("#iteration");
export var kantorBtn = document.querySelector("#kantor");
export var kohaBtn  = document.querySelector("#koha");
export var mandelbrotBtn  = document.querySelector("#mandelbrot");
export var serpinskBtn  = document.querySelector("#serpinsk");
export var state = {
    iteration: 0
};
export var {width, height} = canvas;

export var translateX = (
    () => {
        width/2;
    }
);
export var translateY = (
    () => {
        return height/2;
    }
);

ctx.translate(width/2, height/2);
ctx.strokeStyle = "rgba(200, 0, 0, 255)";
ctx.fillStyle = "rgbа(200, 0, 0, 255)";
