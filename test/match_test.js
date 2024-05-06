import { processStage } from "../stages/stages.js";

export const mocks = [
    [{ $match: { status: { $gt: ["Age", 30] } } }],
    [{ $match: { status: "A", qty: { $lt: 30 } } }],
    //{ $match: { $or: [{ status: "A" }, { qty: { $lt: 30 } }] } }, // TODO: 이 부분은 어떻게 표현할지 추가 고민해봐야함
    [{ $match: { qty: { $gte: 20, $lte: 60 } } }],
];

for (const mock of mocks) {
    processStage(mock);
}
