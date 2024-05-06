import { operate } from "../operators/operation.js";

const MATCH_KEY = "$count";

function processProjectFields(projectFields, configSchema) {
    const newConfigSchema = {};

    newConfigSchema[projectFields] = "COUNT(*)";

    return newConfigSchema;
}

export default function $count(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const projectFields = stage[MATCH_KEY];
    return processProjectFields(projectFields, configSchema);
}

/*
특이사항

Behavior
The $count stage is equivalent to the following $group + $project sequence:

db.collection.aggregate( [
   { $group: { _id: null, myCount: { $sum: 1 } } },
   { $project: { _id: 0 } }
] )

== {$count : "myCount"}

*/
