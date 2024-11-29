function Color(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
}

var ColorPrototype = {
    getColorString: (
        function() {
            return `rgba(${this.red}, ${this.green}, ${this.blue}, 255)`;
        }
    ),
    changeColorWithRandomDelta: (
        function() {
            this.red = this.changeOneColor(this.red);
            this.blue = this.changeOneColor(this.blue);
            this.green = this.changeOneColor(this.green);
        }
    ),
    changeOneColor: (
        function(color) {
            var delta = this.getRandomDelta();
            var newColor = color - delta;
            color = this.getColorWithCheckOverflow(newColor);
            return color;
        }
    ),
    getRandomDelta: (
        function() {
            return Math.random() * 5;
        }
    ),
    getColorWithCheckOverflow: (
        function(color) {
            return (color < 0 ? 255 : color);
        }
    ),
};

Reflect.setPrototypeOf(Color.prototype, ColorPrototype);

export var newColor = (
    (r, g, b) => {
        var color = new Color(r, g, b);
        return color;
    }
);