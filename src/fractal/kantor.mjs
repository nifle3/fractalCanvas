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

var calculateNextX = (
    (pastX, widthNow) => {
        return pastX + (widthNow * 2);
    }
);

var calculateNextY = (
    (pastY) => {
        return pastY + 10;
    }
);

var kantor = (
    () => {
        var innerKantor = (
            (iteration, width, x, y) => {
                if (iteration <= 0) {
                    return;
                }

                drawLine(x, y, width);
                width = calculateNextWidth(width);
                var nextX = calculateNextX(x, width)
                y = calculateNextY(y);
                iteration -= 1;
                innerKantor(iteration, width, x, y);
                innerKantor(iteration, width, nextX, y);
            }
        );

        ctx.beginPath();
        var width = 500;
        var x = calculateXByWidth(0, width);
        var y = -100;

        innerKantor(state.iteration, width, x, y);
        ctx.stroke();
    }
);

kantorBtn.addEventListener("click", 
    checkValidIteration(logDraw(clearRect(kantor)), 10));