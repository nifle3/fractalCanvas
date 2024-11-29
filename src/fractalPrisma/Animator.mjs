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
            for (var i = 0; i < 10; i++) {
                this.point.checkOutOfBounds(this.width, this.height);
                this.point.draw(this.ctx);
                this.point.goNext();
            }

            //this.fader.fade(this.ctx, this.width, this.height);
        }
    )
}

Reflect.setPrototypeOf(Animator.prototype, AnimatorPrototype);

export var newAnimator = (
    (canvas, width, height) => {
        var ctx = canvas.getContext("2d");
        ctx.scale(4, 4);

        var point = newPoint();
        var fader = newFader(100);

        var animator = new Animator(canvas, ctx, width, height, point, fader);
        return animator;
    }
);