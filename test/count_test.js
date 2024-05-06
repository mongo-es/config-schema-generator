import { processStage } from "../stages/stages.js";

export const mocks = [
    [
        {
            $count: "passing_scores",
        },
    ],
];

for (const mock of mocks) {
    processStage(mock);
}
