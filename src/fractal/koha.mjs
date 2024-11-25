import { kohaBtn, state } from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs";

var koha = (
    () => {
        console.log(state.iteration);
    }
);

kohaBtn.addEventListener("click", 
    logDraw(clearRect(koha)));