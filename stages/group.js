import { operate } from "../operators/operation.js";
import { isObject } from "../utils/utils.js";

const MATCH_KEY = "$group";

function isContained(key, schema) {
    return key in schema;
}

function processGroup(groupFields, configSchema) {
    const newConfigSchema = {};

    for (const [key, value] of Object.entries(groupFields)) {
        if (isObject(value)) {
            let result = "";
            for (const [op, field] of Object.entries(value)) {
                result += operate(op, field);
            }
            newConfigSchema[key] = result;
            continue;
        }
        newConfigSchema[key] = value;
    }

    return newConfigSchema;
}

export default function $group(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const groupFields = stage[MATCH_KEY];
    return processGroup(groupFields, configSchema);
}
