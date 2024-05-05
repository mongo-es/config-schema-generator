import { processStage } from "./stages/stages.js";

export default processStage([
    {
        $group: {
            _id: "$item",
            totalSaleAmount: {
                $sum: { $avg: ["$price", "$quantity"] },
            },
            avgA: { $avg: "A" },
            P: { $push: { item: "$item", quantity: "$quantity" } },
        },
    },
]);
