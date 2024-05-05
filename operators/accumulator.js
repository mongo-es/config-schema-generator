import { isArray, isObject } from "../utils/utils.js";
import { operate } from "./operation.js";

export const accumulatorOperations = {
    $avg: (operands) => {
        if (isObject(operands)) {
            const [[key, value]] = Object.entries(operands);
            return `AVG(${operate(key, value)})`;
        }
        return `AVG(${operands})`;
    },
    $sum: (operands) => {
        if (isObject(operands)) {
            const [[key, value]] = Object.entries(operands);
            return `SUM(${operate(key, value)})`;
        }
        return `SUM(${operands})`;
    },
    $count: (operands) => {
        return `COUNT(*)`;
    },
    $first: (operands) => {
        return `FIRST(${operands})`;
    },
    $last: (operands) => {
        return `LAST(${operands})`;
    },
    $top: (operands) => {
        return `TOP(${operands})`;
    },
    $bottom: (operands) => {
        return `BOTTOM(${operands})`;
    },
    $max: (operands) => {
        if (isObject(operands)) {
            const [[key, value]] = Object.entries(operands);
            return `MAX(${operate(key, value)})`;
        }
        return `MAX(${operands})`;
    },
    $min: (operands) => {
        if (isObject(operands)) {
            const [[key, value]] = Object.entries(operands);
            return `MIN(${operate(key, value)})`;
        }
        return `MIN(${operands})`;
    },
    $push: (operands) => {
        if (isObject(operands)) {
            return `[{${Object.values(operands).join(",")}}]`;
        }
        return `[{${operands}}]`;
    },
};
