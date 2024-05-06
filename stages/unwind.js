import { operate } from "../operators/operation.js";
import { isObject } from "../utils/utils.js";

const MATCH_KEY = "$unwind";

function processUnwind(unwindField, configSchema) {
    const newConfigSchema = { ...configSchema };

    if (!isObject(unwindField)) {
        newConfigSchema[unwindField] = "*";
        return newConfigSchema;
    }

    for (const [field, value] of Object.entries(unwindField)) {
        if (field === "path") {
            newConfigSchema[value] = "*";
            continue;
        }
        if (field === "includeArrayIndex") {
            newConfigSchema[value] = "*";
            continue;
        }
    }

    return newConfigSchema;
}

export default function $unwind(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const unwindField = stage[MATCH_KEY];
    return processUnwind(unwindField, configSchema);
}
