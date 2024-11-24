import * as esbuild from 'esbuild';

var context = await esbuild.context({
    entryPoints : ["src/index.mjs"],
    bundle: true,
    outfile: "index.js",
});

await context.watch();
