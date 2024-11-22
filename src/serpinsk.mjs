import { ctx, serpinskBtn, state } from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs";

var calculateTrueLength = (
    (length) => {
        return length/2;
    }
);

var drawEqualTrianlge = (
    (xCenter, yCenter, length) => {
        var halfLength = calculateTrueLength(length);
        ctx.moveTo(xCenter, yCenter-halfLength);
        ctx.lineTo(xCenter+halfLength, yCenter+halfLength);
        ctx.lineTo(xCenter-halfLength, yCenter+halfLength);
        ctx.closePath();
    }
);

var calculateCenterOfShapesTriangle = (
    (xCenter, yCenter, length) => {
        var halfLength = calculateTrueLength(length);
        var dot1X = xCenter;
        var dot1Y = yCenter-halfLength;
        var dot2X = xCenter+halfLength;
        var dot2Y = yCenter+halfLength;
        var dot3X = xCenter-halfLength;
        var dot3Y = yCenter+halfLength;

        var result = [];
        

        /*
            {
                "x":
                "y":
            }
        */


        

        return result;
    }
);

var serpinsk = (
    () => {
        var xCenter = 0;
        var yCenter = 0;
     
        ctx.beginPath();
        drawEqualTrianlge(xCenter, yCenter, 400);

        for (var i = 0; i < state.iteration; i++) {
        }



        ctx.stroke();
    }
);

serpinskBtn.addEventListener("click", logDraw(clearRect(serpinsk)));