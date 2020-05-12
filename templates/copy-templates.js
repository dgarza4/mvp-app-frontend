/* eslint-disable */

const fs = require("fs");

const rawName = process.argv[3];

if (!rawName) {
  throw new Error("Must provide name");
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const charRegex = /(-|_)/g;

const componentName = rawName.replace(charRegex, " ").split(" ").map(capitalize).join("");

fs.mkdirSync(__dirname + `/../src/components/${componentName}`);
const indexFile = fs.readFileSync(__dirname + "/index.tsx", "utf8");

fs.writeFileSync(__dirname + `/../src/components/${componentName}/index.tsx`, indexFile.replace(/ComponentName/g, componentName));
fs.copyFileSync(__dirname + "/styles.tsx", __dirname + `/../src/components/${componentName}/styles.tsx`);

/* eslint-enable */