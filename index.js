import { processStage, processStageByStep } from "./stages/stages.js";

export function generateConfigSchema(pipeline) {
    return processStage(pipeline);
}

export const generateConfigSchemaByStep = (pipeline) => {
    return processStageByStep(pipeline);
};
