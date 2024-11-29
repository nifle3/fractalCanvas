import { newAnimator } from "./Animator.mjs";

export var canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var {width, height} = canvas;

var mainAnimator = newAnimator(canvas, width, height);

mainAnimator.animate();