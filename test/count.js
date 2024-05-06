import { processStage } from "../stages/stages.js";

const mocks = [
    [
        {
            $count: "passing_scores",
        },
    ],
];

for (const mock of mocks) {
    processStage(mock);
}
