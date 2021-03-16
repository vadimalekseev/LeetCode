#!/usr/bin/env node
// @ts-check
const exportSolvingsInfo = require("./exportSolvingsInfo");
const generateLeetCodeReport = require("./generateLeetCodeReport");
const fs = require("fs").promises;
const path = require("path");

(async () => {
  const problems = await exportSolvingsInfo();
  const mdFileContent = generateLeetCodeReport(problems);

  const dest = path.join(__dirname, "..", "README.md");
  await fs.writeFile(dest, mdFileContent);
})()
  .then(() => console.log("README.md file was generated"))
  .catch(console.log);
