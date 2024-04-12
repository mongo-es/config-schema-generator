import { isNumber, isObject } from "../utils/utils.js";

export function gt(op) {
    if (isNumber(op.$gt)) {
        return `> ${op.$gt}`;
    }
    if (isObject(op.$gt)) {
        return `${op.$gt[0]} > ${op.$gt[1]}`;
    }
}

export function gte(op) {
    if (isNumber(op.$gte)) {
        return `>= ${op.$gte}`;
    }
    if (isObject(op.$gte)) {
        return `${op.$gte[0]} >= ${op.$gte[1]}`;
    }
}

export function lt(op) {
    if (isNumber(op.$lt)) {
        return `< ${op.$lt}`;
    }
    if (isObject(op.$lt)) {
        return `${op.$lt[0]} < ${op.$lt[1]}`;
    }
}

export function lte(op) {
    if (isNumber(op.$lte)) {
        return `<= ${op.$lte}`;
    }
    if (isObject(op.$lte)) {
        return `${op.$lte[0]} <= ${op.$lte[1]}`;
    }
}

export function eq(op) {
    if (isNumber(op.$eq)) {
        return `=== ${op.$eq}`;
    }
    if (isObject(op.$eq)) {
        return `${op.$eq[0]} === ${op.$eq[1]}`;
    }
}
