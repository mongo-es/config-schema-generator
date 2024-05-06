import { processStage } from "../stages/stages.js";

export const mocks = [
    [
        {
            $lookup: {
                from: "inventory",
                localField: "item",
                foreignField: "sku",
                as: "inventory_docs",
            },
        },
    ],
];

for (const mock of mocks) {
    processStage(mock);
}