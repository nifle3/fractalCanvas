import { iterInput, state } from "./consts.mjs"; 

var onChangeIteration = (
    (event) => {
        state.iteration = event.target.value;
    }
);

iterInput.addEventListener("change", onChangeIteration);
