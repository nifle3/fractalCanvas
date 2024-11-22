import { ctx, kantorBtn, state } from "./consts.mjs";
import { logDraw, clearRect } from "./utils.mjs";

var kantor = (
    () => {
        console.log(state.iteration);
    }
);

kantorBtn.addEventListener("click", logDraw(clearRect(kantor)));