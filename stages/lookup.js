const MATCH_KEY = "$lookup";

function processLookup(stageField, configSchema) {
    const newConfigSchema = { ...configSchema };
    const lookupField = {
        from: "",
        localField: "",
        foreignField: "",
        as: "",
    };

    for (const [field, value] of Object.entries(stageField)) {
        if (field === "from") {
            lookupField.from = value;
            continue;
        }
        if (field === "localField") {
            lookupField.localField = value;
            continue;
        }
        if (field === "foreignField") {
            lookupField.foreignField = value;
            continue;
        }
        if (field === "as") {
            lookupField.as = value;
            continue;
        }
    }

    newConfigSchema[
        `${lookupField.localField}(${lookupField.from}.${lookupField.foreignField})`
    ] = "*";
    newConfigSchema[`${lookupField.as}(${lookupField.from})`] = `[*]`;

    return newConfigSchema;
}

export default function $lookup(stage, configSchema) {
    if (!stage[MATCH_KEY]) {
        return configSchema;
    }

    const stageField = stage[MATCH_KEY];
    return processLookup(stageField, configSchema);
}
