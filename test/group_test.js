import { processStage } from "../stages/stages.js";

export const mocks = [
    [
        {
            $group: {
                _id: null,
                count: { $count: {} },
            },
        },
    ],
    [
        {
            $group: {
                _id: "$item",
                totalSaleAmount: {
                    $sum: { $multiply: ["$price", "$quantity"] },
                },
            },
        },
    ],
    [
        {
            $group: {
                _id: null,
                totalSaleAmount: {
                    $sum: { $multiply: ["$price", "$quantity"] },
                },
                averageQuantity: { $avg: "$quantity" },
                count: { $sum: 1 },
            },
        },
    ],
    [{ $group: { _id: "$author", books: { $push: "$title" } } }],
    [
        {
            $group: { _id: "$author", books: { $push: "$$ROOT" } },
        },
    ],
];

for (const mock of mocks) {
    processStage(mock);
}
