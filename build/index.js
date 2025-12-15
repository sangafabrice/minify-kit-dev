import transform from "flow-remove-types";
import { globSync, readFileSync, writeFileSync } from "fs";

globSync("src/**/*.{js,json}").forEach(async (filename) =>
    writeFileSync(
        filename.replace(/^src([\/\\])/, "lib$1"),
        transform(readFileSync(filename, "utf8"), { pretty: true }).toString()
    )
);