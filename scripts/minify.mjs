#!/usr/bin/env node
// Minifies assets/style.css and assets/*.js into *.min.* files.
// Run: node scripts/minify.mjs
import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const files = [
  ["assets/style.css", "assets/style.min.css"],
  ["assets/refer.js", "assets/refer.min.js"],
  ["assets/recommend.js", "assets/recommend.min.js"],
];

function minifyCss(source) {
  const strings = [];
  const protectedCss = source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, (match) => {
      strings.push(match);
      return `\u0000${strings.length - 1}\u0000`;
    });
  const collapsed = protectedCss
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>~+])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
  return collapsed.replace(/\u0000(\d+)\u0000/g, (_, i) => strings[Number(i)]);
}

for (const [input, output] of files) {
  const source = await readFile(input, "utf8");
  let minified;
  if (input.endsWith(".css")) {
    minified = minifyCss(source);
  } else {
    minified = execFileSync(
      "npx",
      ["--yes", "terser", input, "--compress", "--mangle", "--output", output],
      { encoding: "utf8" }
    );
    continue;
  }
  await writeFile(output, minified + "\n");
  console.log(`${input} -> ${output} (${source.length} -> ${minified.length} bytes)`);
}
