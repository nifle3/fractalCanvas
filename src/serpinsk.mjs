import { ctx, serpinskBtn, state } from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs";

var calculateTrueLength = (
    (length) => {
        var truelength = length/2;
        return truelength;
    }
);

var attractGenerate = (
    (centerX, centerY, length) => {
        var radius = calculateTrueLength(length);
        var x1 = centerX;
        var y1 = centerY - radius;
        var x2 = centerX - radius;
        var y2 = centerY + radius;
        var x3 = centerX + radius;
        var y3 = centerY + radius;

        var dot1 = {
            "x": x1,
            "y": y1,
        }

        var dot2 = {
            "x": x2,
            "y": y2,
        }

        var dot3 = {
            "x": x3,
            "y": y3,
        }

        result = [dot1, dot2, dot3]
        return result
    }
);

var drawPoint = (
    ({x, y}) => {
        ctx.fillRect(x, y, 1, 1);
    }
);

var serpinsk = (
    () => {
        var attracts = attractGenerate(0, 0, 400);
        var pPast = attracts[0];        

        drawPoint(pPast);

        var iteration = state.iteration * 100;
        for (var i = 0; i <  iteration; i++) {
            var n = Math.random()
            var attractor = attracts[2];
            if (n-0.3 <= 0) {
                attractor = attracts[0];
            } else if (n-0.6 <= 0) {
                attractor = attracts[1];
            }
        
            var xNew = (pPast.x + attractor.x) / 2;
            var yNew = (pPast.y + attractor.y) / 2;

            var pointNew = {
                "x": xNew,
                "y": yNew,
            };

            drawPoint(pointNew);
            pPast = pointNew;
        }

        ctx.stroke();
    }
);

serpinskBtn.addEventListener("click", logDraw(clearRect(serpinsk)));