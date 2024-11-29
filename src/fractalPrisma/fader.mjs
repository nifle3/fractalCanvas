// TODO: naming
function Fader(deltaFade) {
    this.deltaFade = deltaFade;
}

var faderPrototype = {
    fade: (
        function(ctx, width, heigth) {
            var imageData = ctx.getImageData(0, 0, width, heigth);

            for (var i = 0; i < imageData.data.length; i+= 4) {
                imageData.data[i] = Math.max(imageData.data[i] - this.deltaFade, 0);
                imageData.data[i+1] = Math.max(imageData.data[i+1] - this.deltaFade, 0);
                imageData.data[i+2] = Math.max(imageData.data[i+2] - this.deltaFade, 0);
            }

            ctx.putImageData(imageData, 0, 0);
        }
    )
}

Reflect.setPrototypeOf(Fader.prototype, faderPrototype);

export var newFader = (
    (deltaFade) => {
        var fader = new Fader(deltaFade);
        return fader;
    }
);