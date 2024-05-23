import { operate } from "../operators/operation.js";

const MATCH_KEY = "$sort";

function processSort(sortField, configSchema) {
    return configSchema;
}

export default function $sort(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const sortField = stage[MATCH_KEY];
    return processSort(sortField, configSchema);
}
