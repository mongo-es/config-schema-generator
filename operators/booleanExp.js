import { comparisonOperations } from "./comparisonExp.js";

export const booleanOperations = {
    $and: (operands) => {
        return operands
            .map((operand) => processCondition(operand))
            .join(" AND ");
    },

    $or: (operands) => {
        return operands
            .map((operand) => processCondition(operand))
            .join(" OR ");
    },

    $not: (operand) => {
        let result = processCondition(operand);
        return `NOT (${result})`;
    },
};

function processCondition(condition) {
    // 조건을 문자열로 변환
    let keys = Object.keys(condition);
    let results = keys.map((key) => {
        if (comparisonOperations[key]) {
            let value = condition[key];
            return comparisonOperations[key](value);
        }
        return `${key} UNDEFINED`;
    });
    return results.join(" ");
}
