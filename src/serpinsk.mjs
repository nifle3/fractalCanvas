import { ctx, serpinskBtn, state, width, height} from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs"
var drawEqualTrianlge = (
    (xCenter, yCenter, length) => {
        var halfLength = length/2;
        ctx.moveTo(xCenter, yCenter-halfLength);
        ctx.lineTo(xCenter+halfLength, yCenter+halfLength);
        ctx.lineTo(xCenter-halfLength, yCenter+halfLength);        
    }
);

var serpinsk = (
    () => {
        var xCenter = 0;
        var yCenter = 0;
     
        ctx.beginPath();

        drawEqualTrianlge(xCenter, yCenter, 200);

        ctx.closePath();
        ctx.stroke();

        drawEqualTrianlge(xCenter, yCenter, 300);

    }
);

serpinskBtn.addEventListener("click", logDraw(clearRect(serpinsk)));