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
            var deltaX = this.getNextDeltaPoint();
            this.x += deltaX;
            var deltaY = this.getNextDeltaPoint();
            this.y += deltaY;
            this.color.changeColorWithRandomDelta();
        }
    ),
    getNextDeltaPoint: (
        function() {
            var seed = Math.random() * 10;
            if (seed > 5) {
                return 1;
            }
            return 0;
        }
    ),
    checkOutOfBounds: (
        function(width, heigth) {
            if (this.x > width) {
                this.x = 0;
                console.log(`x ${this.x} out of`);
            } else if (this.x < 0) {
                this.x = width-10;
                console.log(`x ${this.x} out of`);
            }

            if (this.y > heigth) {
                this.y = 0;
                console.log(`y ${this.y} out of`);
            } else if (this.y < 0) {
                this.y = heigth-10;
                console.log(`y ${this.y} out of`);
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