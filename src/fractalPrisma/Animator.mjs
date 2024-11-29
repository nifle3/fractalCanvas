import { newFader } from "./fader.mjs";
import { newPoint } from "./point.mjs";

function Animator(canvas, ctx, width, height, point, fader) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.point = point;
    this.fader = fader;
}

var AnimatorPrototype = {
    animate: (
        function() {
            this.doFrame();
            requestAnimationFrame(this.animate.bind(this));
        }
    ),
    doFrame: (
        function() {
            this.fader.fade(this.ctx, this.width, this.height);

            for (var i = 0; i < 5000; i++) {
                this.point.checkOutOfBounds(this.width, this.height);
                this.point.draw(this.ctx);
                this.point.goNext();
            }

        }
    )
}

Reflect.setPrototypeOf(Animator.prototype, AnimatorPrototype);

export var newAnimator = (
    (canvas, width, height) => {
        var opts = {
            willReadFrequently: true,
        }
        var ctx = canvas.getContext("2d", opts);
        var point = newPoint();
        var fader = newFader(0.7);

        var animator = new Animator(canvas, ctx, width, height, point, fader);
        return animator;
    }
);