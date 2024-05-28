import $match from "./match.js";
import $project from "./project.js";
import $group from "./group.js";
import $count from "./count.js";
import $lookup from "./lookup.js";
import $unwind from "./unwind.js";
import $limit from "./limit.js";

const stageOperations = {
    $match,
    $project,
    $group,
    $count,
    $lookup,
    $unwind,
    $limit,
};

export const processStage = (pipeline) => {
    let configSchema = {};
    for (const step of pipeline) {
        const [stage, data] = Object.entries(step)[0];
        //console.log(stage);
        if (!stageOperations[stage]) {
            throw new Error(`Unknown stage: ${stage}`);
        }
        configSchema = stageOperations[stage](step, configSchema);
    }
    //console.log(configSchema);
    return configSchema;
};

export const processStageByStep = (pipeline) => {
    const configSchemaSteps = [];
    let configSchema = {};
    for (const step of pipeline) {
        const [stage, data] = Object.entries(step)[0];
        if (!stageOperations[stage]) {
            throw new Error(`Unknown stage: ${stage}`);
        }
        configSchema = stageOperations[stage](step, configSchema);
        const a = {};
        a[stage] = configSchema;
        configSchemaSteps.push(a);
    }
    return configSchemaSteps;
};
