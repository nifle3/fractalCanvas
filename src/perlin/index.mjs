import {Point} from "./point.mjs";
import {newVectorWithCoord} from "./vector.mjs";

"use strict";

console.log("hello world, es build works");

export var generateNumber = (
    (min, max) => {
        return ((Math.random() * (max - min + 1)) + min);
    }
);

/* 

    -----------------------------------
        CREATING
    -----------------------------------

*/

var canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var { width, height } = canvas;


var gridVertex = [
    new Point(0, 0),
    new Point(width, 0),
    new Point(0, height),
    new Point(width, height),
];


var vectorVertex = gridVertex.map(value => {
    var randY = value.y + generateNumber(-1, 1);
    var randX = value.x + generateNumber(-1, 1);
    
    var vector = newVectorWithCoord(value.x, value.y, randX, randY);
    vector.normilize();
    
    return vector;
});

var caclulateNoise = (
    (x, y) => {

    }
);

for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
        /*
            LL - idx = 2
            LR - idx = 
            UL - idx = 
            UR - idx = 
        */
        var vectorsWeight = gridVertex.map((value, idx) => {
            var vectorToPoint = newVectorWithCoord(value.x, value.y, i, j);
            return vectorVertex[idx].dot(vectorToPoint);
        });

        
    }
}

/*
    ---------------------------------------------
        DRAWING
    ---------------------------------------------

*/
var ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, width, height);

var imageData = ctx.getImageData(0, 0, width, height);

for (var i = 0; i < imageData.data.length ; i += 4) {
    imageData.data[i] = 255;
    imageData.data[i+1] = 0;
    imageData.data[i+2] = 0;
}

ctx.putImageData(imageData, 0, 0);
