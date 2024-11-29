import { newColor } from "./color.mjs";

function Point(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
};

var PointPrototype = {
    draw: (
        function(ctx) {
            var color = this.color.getColorString();
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, 1, 1);
        }
    ),
    goNext: (
        function() {
            var {dx, dy} = this.getNextDeltaPoint();
            this.x += dx;
            this.y += dy;
            this.color.changeColorWithRandomDelta();
        }
    ),
    getNextDeltaPoint: (
        function() {
            var seed = ((Math.random() * 4) + 1);
            var nextDeltaSelector = Math.floor(seed);
            var result = {
                dx: 0,
                dy: 0,
            };

            switch (nextDeltaSelector) {
                case 1:
                    result.dx = 1;
                    return result
                case 2:
                    result.dx = -1;
                    return result;
                case 3:
                    result.dy = 1;
                    return result;
                case 4:
                    result.dy = -1;
                    return result;
            }
        
            return result
        }
    ),
    checkOutOfBounds: (
        function(width, heigth) {
            if (this.x >= width) {
                this.x = 0;
            } else if (this.x < 0) {
                this.x = width-10;
            }

            if (this.y >= heigth) {
                this.y = 0;
            } else if (this.y < 0) {
                this.y = heigth-10;
            }
        }
    )
};

Reflect.setPrototypeOf(Point.prototype, PointPrototype);

export var newPoint = (
    () => {
        var color = newColor(100, 100, 100);
        var point = new Point(0, 0, color);
        return point;
    }
);