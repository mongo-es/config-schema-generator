import { isNumber, isArray } from "../utils/utils.js";

export const comparisonOperations = {
    /*
    명칭: $gt
    설명: 첫 번째 값이 두 번째 값보다 크면 true를 반환합니다.
    */
    $gt: (operands) => {
        if (isNumber(operands)) return `> ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" > ${operands[1]}`;
    },

    /*
    명칭: $gte
    설명: 첫 번째 값이 두 번째 값보다 크거나 같으면 true를 반환합니다.
    */
    $gte: (operands) => {
        if (isNumber(operands)) return `>= ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" >= ${operands[1]}`;
    },

    /*
    명칭: $lt
    설명: 첫 번째 값이 두 번째 값보다 작으면 true를 반환합니다.
    */
    $lt: (operands) => {
        if (isNumber(operands)) return `< ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" < ${operands[1]}`;
    },

    /*
    명칭: $lte
    설명: 첫 번째 값이 두 번째 값보다 작거나 같으면 true를 반환합니다.
    */
    $lte: (operands) => {
        if (isNumber(operands)) return `<= ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" <= ${operands[1]}`;
    },

    /*
    명칭: $eq
    설명: 두 값이 동등하면 true를 반환합니다.
    */
    $eq: (operands) => {
        if (isNumber(operands)) return `=== ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" === ${operands[1]}`;
    },

    /*
    명칭: $cmp
    설명: 두 값이 같으면 0을, 첫 번째 값이 더 크면 1을, 작으면 -1을 반환합니다.
    */
    $cmp: (operands) => {
        if (isArray(operands)) {
            if (operands[0] > operands[1]) return 1;
            if (operands[0] < operands[1]) return -1;
            return 0;
        }
    },

    /*
    명칭: $ne
    설명: 두 값이 동등하지 않으면 true를 반환합니다.
    */
    $ne: (operands) => {
        if (isNumber(operands)) return `!== ${operands}`;
        if (isArray(operands)) return `"${operands[0]}" !== ${operands[1]}`;
    },
};
