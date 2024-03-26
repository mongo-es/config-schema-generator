export function gte(op) {
    if (typeof op.$gte == "number") {
        return `>= ${op.$gte}`;
    }
    if (typeof op.$gte == "object") {
        return `${op.$gte[0]} >= ${op.$gte[1]}`;
    }
}
