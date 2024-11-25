import { iterInput, state } from "./consts.mjs"; 

state.iteration = Number(iterInput.value);

var onChangeIteration = (
    (event) => {
        state.iteration = Number(event.target.value);
    }
);

iterInput.addEventListener("change", onChangeIteration);
