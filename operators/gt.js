export function gt(op) {
    if (typeof op.$gt == "number") {
        return `> ${op.$gt}`;
    }
    if (typeof op.$gt == "object") {
        return `${op.$gt[0]} > ${op.$gt[1]}`;
    }
}
