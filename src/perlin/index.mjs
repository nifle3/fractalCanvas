import {Point} from "./point.mjs";
import {newVectorWithCoord} from "./vector.mjs";
import {newGrid} from "./grid.mjs";

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

canvas.width = 400;
canvas.height = 400;

var { width, height } = canvas;
var ctx = canvas.getContext("2d");


var sFunc = (
    (t) => {
        return Math.pow(t, 3)*((t*(t-15))+10);
    }
)

var lFunc = (
    (x, LL, LR) => {
        var r1 = sFunc(x - Math.floor(x));
        var r2 = LR-LL;
        var result = (LL + (r1*r2));
        return result;
    }
)

var uFunc = (
    (x, UL, UR) => {
        return (UL + (sFunc(x - Math.floor(x))*(UR-UL)));
    }
)

var noiseFunc = (
    (x, y, UL, UR, LL, LR) => {
        return (lFunc(x, LL, LR) + (sFunc(y - Math.floor(y)) * (uFunc(x, UL, UR) - lFunc(x, LL, LR))));
    }
)

var grid = newGrid(4, 4, width, height);

var caclulateNoise = (
    (x, y) => {
        /*
        LL - idx = 2
        LR - idx = 3
        UL - idx = 0
        UR - idx = 1
        */   
        var vectorsWeight = gridVertex.map((value, idx) => {
            var vectorToPoint = newVectorWithCoord(value.x, value.y, x, y);
            var result = vectorVertex[idx].dot(vectorToPoint);
            return result;
        });
        
        var noiseValue = noiseFunc(x, y, 
            vectorsWeight[0], vectorsWeight[1],
            vectorsWeight[2], vectorsWeight[3]
        );
        noiseValue += 1;
        noiseValue /= 2;

        var color = 255 * noiseValue;
        ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
        ctx.fillRect(x, y, 0.3, 0.3);
    }
);

for (var s = 0; s < width; s++) {
    for (var t = 0; t < height; t++) {
        var noiseInner = caclulateNoise(s, t, 1); 
        for (var x = s; x < s+1; x+=0.3) {
            for (var y = t; y < t+1; y+=0.3) {
                noiseInner(x, y);
            }
        }    
    }
}
