import { ctx, serpinskBtn } from "./consts.mjs";

var serpinsk = (
    () => {
        console.log("serpinsk hello");
    }
);

serpinskBtn.addEventListener("click", serpinsk);