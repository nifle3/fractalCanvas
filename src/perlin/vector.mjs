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
            this.vecPoint.y = this.vecPoint.y / this.length;

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
            return ((this.vecPoint.x * vecTwo.vecPoint.x) + (this.vecPoint.y * vecTwo.vecPoint.y));
        }
    )
};

Reflect.setPrototypeOf(Vector.prototype, vectorPrototype);

export var newVectorWithCoord = (
    (x1, y1, x2, y2) => {
        var vecX = x2 - x1;
        var vecY = y2 - y1;
        var vecPoint = new Point(vecX, vecY);

        var vector = new Vector(vecPoint, undefined);
        return vector;
    }
);

export var newRandomNormalizeVector  = (
    (x, y) => {
        const angle = Math.random() * 2 * Math.PI;

        var randY = value.y + Math.sin(angle) ;
        var randX = value.x + Math.cos(angle);
        
        var vector = newVectorWithCoord(x, y, randX, randY);
        vector.normalize();
        return vector;
    }
)