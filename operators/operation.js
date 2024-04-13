import { comparisonOperations } from "./comparisonExp.js";
import { booleanOperations } from "./booleanExp.js";

const combinedOperations = { ...comparisonOperations, ...booleanOperations };

export function operate(operatorKey, op) {
    const operation = combinedOperations[operatorKey];
    if (operation) {
        return operation(op);
    } else {
        console.error(`Operation "${operatorKey}" not found.`);
        return undefined;
    }
}
