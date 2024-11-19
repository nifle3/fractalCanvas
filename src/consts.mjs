export var canvas = document.querySelector("#canvas");
export var ctx = canvas.getContext("2d");
export var kantorBtn = document.querySelector("#kantor");
export var kohaBtn  = document.querySelector("#koha");
export var mandelbrotBtn  = document.querySelector("#mandelbrot");
export var serpinskBtn  = document.querySelector("#serpinsk");

export var {width, height} = canvas;

ctx.translate(width/2, height/2);
