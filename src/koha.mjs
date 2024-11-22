import { ctx, kohaBtn, state } from "./consts.mjs";

var koha = (
    () => {
        console.log(state.iteration);
    }
);

kohaBtn.addEventListener("click", koha);