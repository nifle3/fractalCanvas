import * as esbuild from 'esbuild';

var context = await esbuild.context({
    entryPoints : ["src/index.mjs"],
    bundle: true,
    outfile: "index.js",
    target: "esnext",
});

await context.watch();
