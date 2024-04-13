export function isNull(value) {
    return value === null;
}

export function isNumber(value) {
    return typeof value === "number";
}

export function isArray(value) {
    return typeof value === "object" && Array.isArray(value) && !isNull(value);
}

export function isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && !isNull(value);
}
