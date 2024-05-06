import { processStage } from "../stages/stages.js";
import { mocks as match } from "./match_test.js";
import { mocks as project } from "./project_test.js";
import { mocks as group } from "./group_test.js";
import { mocks as count } from "./count_test.js";
import { mocks as lookup } from "./lookup_test.js";
import { mocks as unwind } from "./unwind_test.js";

const q = [...match, ...project, ...group, ...count, ...lookup, ...unwind];

for (const mock of q) {
    processStage(mock);
}
