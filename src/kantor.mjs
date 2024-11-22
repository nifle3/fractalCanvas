import { ctx, kantorBtn, state } from "./consts.mjs";

var kantor = (
    () => {
        console.log(state.iteration);
    }
);

kantorBtn.addEventListener("click", kantor);