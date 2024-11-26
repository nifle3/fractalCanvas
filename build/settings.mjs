var entryPoints = [
    "src/fractal/index.mjs",
    "src/snowfall/index.mjs",
]; 

var prototype = {
    entryPoints : entryPoints,
    bundle: true,
    outdir: "www",
    target: "esnext",
};


export var createPrototypeWithSettings = (
    (settings) => {
        return { ...prototype, ...settings };
    }
);