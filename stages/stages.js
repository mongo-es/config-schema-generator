import $match from "./match.js";
import $project from "./project.js";

const stageOperations = {
    $match,
    $project,
};

function processStage(pipeline) {
    let configSchema = {};
    for (const step of pipeline) {
        const [stage, data] = Object.entries(step)[0];
        if (!stageOperations[stage]) {
            throw new Error(`Unknown stage: ${stage}`);
        }
        configSchema = stageOperations[stage](step, configSchema);
        console.log(`stage: ${stage}`);
        console.log(configSchema);
    }
    console.log("result =>");
    console.log(configSchema);
}

export { processStage };
