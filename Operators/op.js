import gt from "./gt.js";
import gte from "./gte.js";
import lt from "./lt.js";
import lte from "./lte.js";

const gt1 = {
    $gt: 100,
};
const gt2 = {
    $gt: ["exp1", 100],
};
const gte1 = {
    $gte: ["exp1", "ext2"],
};
const lt1 = {
    $lt: ["exp1", "ext2"],
};
const lte1 = {
    $lte: 200,
};

console.log(gt(gt1));
console.log(gt(gt2));
console.log(gte(gte1));
console.log(lt(lt1));
console.log(lte(lte1));
