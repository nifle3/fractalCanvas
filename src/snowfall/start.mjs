import { createSnowfall } from "./snowfall.mjs";

var canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255,255,255,255)";
var { width, height } = canvas; 

var snowfall = createSnowfall(width, height, ctx, 1000);

window.addEventListener("load", snowfall.start.bind(snowfall));