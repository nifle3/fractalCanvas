export var ctx  = document.querySelector("#canvas").getContext("2d");
export var iterInput = document.querySelector("#iteration");
export var kantorBtn = document.querySelector("#kantor");
export var kohaBtn  = document.querySelector("#koha");
export var mandelbrotBtn  = document.querySelector("#mandelbrot");
export var serpinskBtn  = document.querySelector("#serpinsk");
export var state = {
    iteration: 0
};
export var {width, height} = canvas;

ctx.translate(width/2, height/2);
ctx.strokeStyle = 'rgba(255, 255, 255, 255)';
ctx.fillStyle = "rgb(200 0 0)";
