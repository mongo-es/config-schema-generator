import { processStage } from "./stages/stages.js";
const mocks = [
    { $match: { status: "A" } },
    { $match: { status: "A", qty: { $lt: 30 } } },
    { $match: { $or: [{ status: "A" }, { qty: { $lt: 30 } }] } }, // 얘는 어떻게 표현할지 고민해야됨
    { $match: { qty: { $gte: 20, $lte: 60 } } },
];

processStage(mocks[0]);

for (const mock of mocks) {
    processStage(mock);
}
