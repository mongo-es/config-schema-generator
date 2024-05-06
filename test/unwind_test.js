import { processStage } from "../stages/stages.js";

export const mocks = [
    [{ $unwind: { path: "$sizes" } }],
    [{ $unwind: { path: "$sizes", preserveNullAndEmptyArrays: true } }],
    [
        {
            $unwind: {
                path: "$sizes",
                includeArrayIndex: "arrayIndex",
            },
        },
    ],
];

for (const mock of mocks) {
    processStage(mock);
}
