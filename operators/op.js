export { dict } from "./dict.js";

import { eq, gt, gte, lt, lte } from "./comparison.js";

const operations = {
    eq,
    gt,
    gte,
    lt,
    lte,
};

export function op(op) {
    const operation = operations[op];

    if (operation) {
        return operation;
    } else {
        console.error(`Operation "${op}" not found.`);
        return undefined;
    }
}
