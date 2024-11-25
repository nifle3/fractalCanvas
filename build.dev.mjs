import * as esbuild from 'esbuild';

var context = await esbuild.context({
    entryPoints : ["src/index.mjs"],
    bundle: true,
    target: "esnext",
    outdir: "./"
});

await context.watch();

var {port, host} = await context.serve({
    servedir: "./"
});

console.log(`Listen on ${host}:${port}`);