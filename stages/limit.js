import { operate } from "../operators/operation.js";

const MATCH_KEY = "$limit";

function processLimit(limitField, configSchema) {
    return configSchema;
}

export default function $limit(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const limitField = stage[MATCH_KEY];
    return processLimit(limitField, configSchema);
}
