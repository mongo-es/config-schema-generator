import { processStage } from "./stages/stages.js";

export default processStage([
    {
        $count: "passing_scores",
    },
]);
