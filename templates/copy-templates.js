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
fs.copyFileSync(__dirname + "/index.tsx", __dirname + `/../src/components/${componentName}/index.tsx`);
fs.copyFileSync(__dirname + "/styles.tsx", __dirname + `/../src/components/${componentName}/styles.tsx`);

/* eslint-enable */