import { newRandomNormalizeVector } from "./vector.mjs";

function Grid(vectors, cellWidth, cellHeight) {
    this.vectors = vectors;
    this.cellHeight = cellHeight;
    this.cellWidth = cellWidth;
}

var gridPrototype = {
    getVectors: (
        (x, y) => {
            var yIndex = Math.floor(y/this.cellHeight);
            var xIndex = Math.floor(x/this.cellWidth);
            
            return [
                this.grid[yIndex][xIndex],
                this.grid[yIndex+1][xIndex],
                this.grid[yIndex][xIndex+1],
                this.grid[yIndex+1][xIndex+1],
            ];
        }
    )
};

Reflect.setPrototypeOf(Grid.prototype, gridPrototype);

export var newGrid = (
    (cellWidth, cellHeight, width, height) => {
        var grid = [];
        for (var i = 0; i < height; i+=cellHeight) {
            var row = [];
            for (var j = 0; j < width; j+=cellWidth) {
                row.push(newRandomNormalizeVector(j, y));
            }
            grid.push(row);
        }

        return new Grid(grid, cellWidth, cellHeight);
    }
);

