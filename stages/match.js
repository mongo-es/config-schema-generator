import { op, dict } from "../operators/op.js";

const match1 = {
    $match: { status: "A", age: 12 },
};
const match2 = {
    $match: {
        quantity: { $gt: 20, $lt: 50 },
    },
};

// value가 obj인가 리터럴인가 판단
// 리터럴이면 assign
// obj이면 연산해서 assign

function match(stage) {
    let result = {};
    Object.entries(stage.$match)
        .filter(
            ([key, value]) =>
                typeof value === "object" &&
                !Array.isArray(value) &&
                !isNull(value)
        )
        .forEach(([key, value]) => {
            const objs = Object.keys(value).map((key) => ({
                [key]: value[key],
            }));
            objs.forEach((obj) => {
                const keyName = dict[Object.keys(obj)[0]];
                console.log(op(keyName)(obj));
            });
        });
    Object.assign(result, stage.$match);

    return result;
}

function isNull(obj) {
    return obj === null;
}

//console.log(match(match1));
//console.log(match(match2));
match(match2);
