import $match from "./match.js";

const stageOperations = {
    $match,
};

function processStage(step) {
    for (const [stage, data] of Object.entries(step)) {
        if (!stageOperations[stage]) {
            throw new Error(`Unknown stage: ${stage}`);
        }
        const result = stageOperations[stage](step);
        console.log(result);
    }
}

export { processStage };
