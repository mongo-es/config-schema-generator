import { processStage } from "../stages/stages.js";

const mocks = [
    [{ $project: { _id: 1, name: 1, "orders.amount": 1 } }],
    [{ $project: { _id: 1, name: 1, "orders.amount": 1 } }],
    [{ $project: { _id: 1, name: 0, "orders.amount": 1 } }],
    [{ $project: { _id: 1, "orders.amount": 100 } }],
];

for (const mock of mocks) {
    processStage(mock);
}
