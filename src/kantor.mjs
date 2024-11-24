import { ctx, kantorBtn, state } from "./consts.mjs";
import { logDraw, clearRect, checkValidIteration } from "./utils.mjs";


var drawLine = (
    (x, y, width) => {
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
    }
);

var calculateXByWidth = (
    (x, width) => {
        return x - (width / 2);
    }
);

var calculateNextWidth = (
    (width) => {
        return width/3;
    }
);

var CalculateNextX = (
    (pastX, widthNow) => {
        return pastX + (widthNow * 2);
    }
);

var kantor = (
    () => {
        ctx.beginPath();
        var width = 500;
        var x = calculateXByWidth(0, width);
        var y = -100;
        drawLine(x, y, width);

        for (var i = 0; i < state.iteration; i++) {
        }

        ctx.stroke();
    }
);

kantorBtn.addEventListener("click", 
    checkValidIteration(logDraw(clearRect(kantor)), 10));