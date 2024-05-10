import { processStage } from "./stages/stages.js";

export function generateConfigSchema(pipeline) {
    return processStage(pipeline);
}
