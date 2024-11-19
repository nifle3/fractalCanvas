import { ctx, kohaBtn } from "./consts.mjs";

var koha = (
    () => {
        console.log("koha hello");
    }
);

kohaBtn.addEventListener("click", koha);