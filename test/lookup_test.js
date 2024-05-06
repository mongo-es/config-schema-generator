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
    [
        {
            $lookup: {
                from: "members",
                localField: "enrollmentlist",
                foreignField: "name",
                as: "enrollee_info",
            },
        },
    ],
    [{
        $lookup: {
           from: "items",
           localField: "item",    // field in the orders collection
           foreignField: "item",  // field in the items collection
           as: "fromItems"
        }
     }]
];

for (const mock of mocks) {
    processStage(mock);
}
