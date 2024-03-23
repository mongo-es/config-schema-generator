export function lt(op) {
    if (typeof op.$lt == "number") {
        return `< ${op.$lt}`;
    }
    if (typeof op.$lt == "object") {
        return `${op.$lt[0]} < ${op.$lt[1]}`;
    }
}
