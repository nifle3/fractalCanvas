import { ctx, serpinskBtn, state } from "./consts.mjs";

var serpinsk = (
    () => {
        console.log(state.iteration);
    }
);

serpinskBtn.addEventListener("click", serpinsk);