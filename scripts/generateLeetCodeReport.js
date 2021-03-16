// @ts-check

const EOL = "\n";
const GITHUB_REPO_URL = "https://github.com/Vad1mAlekseev/LeetCodeProblemSolving";
const LEETCODE_URL = "https://leetcode.com";

const HARD_DIFFICULT_ID = "hard";
const MEDIUM_DIFFICULT_ID = "medium";
const EASY_DIFFICULT_ID = "easy";

const EXTENSIONS_TITLES = Object.freeze({
  cs: "C#",
  js: "JS",
});

/**
 * Build GitHub url from file path.
 * @param {string} pathToFile Relative to the project root file path.
 * @returns GitHub path url;
 */
function predictGithubUrl(pathToFile) {
  return `${GITHUB_REPO_URL}/blob/main/${pathToFile}`;
}

/**
 * Build LeetCodee url from problem id.
 * @param {string} id Problem id.
 */
function predictLeetcodeUrl(id) {
  return `${LEETCODE_URL}/problems/${id}`;
}

/**
 * Convert text to PascalCase
 * @param {string} text
 * @returns Converted text.
 */
 function toPascalCase(text) {
  return text.replace(/\w+/g, (text) => text[0].toUpperCase() + text.slice(1).toLowerCase());
}

/**
 * Generate table body from problems array.
 * @param {{ id: string, solvings: { extension: string, path: string }[], difficulty: string}[]} problems The problems.
 * @returns Table body.
 */
function generateTableBody(problems) {
  return problems
    .map(
      (problem, idx) =>
        `|${idx + 1}|[${toPascalCase(problem.id.replace(/-/g, " "))}](${predictLeetcodeUrl(problem.id)})|${toPascalCase(problem.difficulty)}|${problem.solvings
          .map((solut) => `[${EXTENSIONS_TITLES[solut.extension]}](${predictGithubUrl(solut.path)})`)
          .join(", ")}|`
    )
    .join(EOL);
}

/**
 *
 * @param {{ id: string, solvings: { extension: string, path: string }[], difficulty: string}[]} problems Collected solvings.
 * @returns
 */
module.exports = (problems) => {
  /**
   * Compute difficulties count.
   * @returns {{ [key: string]: string }} difficulties count
   */
  function computeDifficultiesCount() {
    return problems.reduce((acc, curr) => {
      acc[curr.difficulty] = (acc[curr.difficulty] || 0) + 1;
      Object.keys(EXTENSIONS_TITLES).forEach(ext => {
        if (curr.solvings.find(s => s.extension === ext))
          acc[ext] = (acc[ext] || 0) + 1;
      });
      return acc;
    }, {});
  }

  /**
   *
   * @param {string} summary Table header.
   * @param {(item: { id: string, solvings: { extension: string, path: string }[], difficulty: string}) => boolean} [predicate] For filter problems.
   * @returns The table.
   */
  function generateSolvingsTable(summary, predicate) {
    const tableLines = [
      "",
      "<details>",
      `<summary>${summary}</summary>`,
      "",
      "| #     | Problem            | Difficulty | Solvings        |",
      "|:-----:|:------------------:|:----------:|:---------------:|",
      predicate ? generateTableBody(problems.filter(predicate)) : generateTableBody(problems),
      "",
      "</details>",
      "",
    ];
    return tableLines.join(EOL);
  }

  const solvingsStat = computeDifficultiesCount();

  return `# This repo contains my solvings leetcode problems

This file was generated automatically by [build.js](${predictGithubUrl("scripts/build.js")}) script.

${generateSolvingsTable("All solvings")}
Count of all problems solved: ${problems.length}

${generateSolvingsTable('Solvings with difficulty "Hard"', (p) => p.difficulty === HARD_DIFFICULT_ID)}
Count of solved problems with difficulty "Hard": ${solvingsStat[HARD_DIFFICULT_ID]}

${generateSolvingsTable('Solvings with difficulty "Medium"', (p) => p.difficulty === MEDIUM_DIFFICULT_ID)}
Count of solved problems with difficulty "Medium": ${solvingsStat[MEDIUM_DIFFICULT_ID]}

${generateSolvingsTable('Solvings with difficulty "Easy"', (p) => p.difficulty === EASY_DIFFICULT_ID)}
Count of solved problems with difficulty "Easy": ${solvingsStat[EASY_DIFFICULT_ID]}

${Object.keys(EXTENSIONS_TITLES).map(ext =>
  `${generateSolvingsTable(`Solvings with ${EXTENSIONS_TITLES[ext]}`, (p) => !!p.solvings.find(s => s.extension === ext))}
  Solved problems with ${EXTENSIONS_TITLES[ext]}: ${solvingsStat[ext]}`).join(EOL + EOL)}
`;
};
