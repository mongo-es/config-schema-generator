export default function lte(op) {
    if (typeof op.$lte == "number") {
        return `<= ${op.$lte}`;
    }
    if (typeof op.$lte == "object") {
        return `${op.$lte[0]} <= ${op.$lte[1]}`;
    }
}
