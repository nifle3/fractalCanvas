import { createSnowfall } from "./snowfall.mjs";

var canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var { width, height } = canvas; 

var snowfall = createSnowfall(width, height, ctx, 100);

window.addEventListener("load", snowfall.start);
