import { processStage, processStageByStep } from "../stages/stages.js";

//const mocks = [];
const mocks = [
    [
        { $match: { status: { $gt: ["Age", 30] } } },
        { $project: { _id: 1, status: 1, "orders.amount": 1 } },
    ],

    [{ $match: { _id: "10", name: "Min" } }, { $project: { _id: 1, name: 1 } }],

    [{ $match: { _id: "11", name: "Min" } }, { $project: { _id: 1, name: 0 } }],

    [
        { $match: { _id: "12", "orders.amount": { $gte: 60, $lte: 160 } } },
        { $project: { _id: 1, "orders.amount": 100 } },
    ],
];

for (const mock of mocks) {
    processStage(mock);
    console.log(processStageByStep(mock));
}
