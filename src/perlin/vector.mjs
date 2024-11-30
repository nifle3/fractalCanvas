import {Point} from "./point.mjs"

function Vector(vecPoint, length) {
    this.vecPoint = vecPoint;
    this.length = length;
}

var vectorPrototype = {
    normalize: (
        function() {
            if (this.length === undefined) {
                this.calculateLength();
            }

            if (this.length === 1) {
                return;
            }

            this.vecPoint.x = this.vecPoint.x / this.length;
            this.vecPoint = this.vecPoint.y / this.length;

            this.calculateLength()
        }
    ),
    calculateLength: (
        function() {
            var doubleY = this.vecPoint.y * this.vecPoint.y;
            var doubleX = this.vecPoint.x * this.vecPoint.x;
            this.length = Math.sqrt(doubleX + doubleY);
        }
    ),
    dot: (
        function(vecTwo) {
            return ((this.vecPoint.x * vecTwo.x) + (this.vecPoint.y * vecTwo.y));
        }
    )
};

Reflect.setPrototypeOf(Vector.prototype, vectorPrototype);

export var newVectorWithTwoPoints = (
    (point1, point2) => {
        var vecX = point2.x - point1.x;
        var vecY = point2.y - point1.y;
        var vecPoint = new Point(vecX, vecY);

        var vector = new Vector(vecPoint, undefined);
        return vector;
    }
);

export var newVectorWithCoord = (
    (x1, y1, x2, y2) => {
        var vecX = x2 - x1;
        var vecY = y2 - y1;
        var vecPoint = new Point(vecX, vecY);

        var vector = new Vector(vecPoint, undefined);
        return vector;
    }
);

