var prototype = {
    entryPoints : ["src/fractal/index.mjs", "src/snowfall/index.mjs"],
    bundle: true,
    outdir: "www",
    target: "esnext",
};


export var createPrototypeWithSettings = (
    (settings) => {
        return { ...prototype, ...settings };
    }
);