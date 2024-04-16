const MATCH_KEY = "$project";

function isContained(key, schema) {
    return key in schema;
}

function processProjectFields(projectFields, configSchema) {
    const newConfigSchema = { ...configSchema };

    for (const [key, value] of Object.entries(projectFields)) {
        if (value === 0) {
            delete newConfigSchema[key];
            continue;
        }

        if (value === 1 && !isContained(key, configSchema)) {
            newConfigSchema[key] = "*";
            continue;
        }
    }

    return newConfigSchema;
}

export default function $project(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const projectFields = stage[MATCH_KEY];
    return processProjectFields(projectFields, configSchema);
}
