import { ctx, kantorBtn } from "./consts.mjs";

var kantor = (
    () => {
        console.log("kantor hello");
    }
);

kantorBtn.addEventListener("click", kantor);