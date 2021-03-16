// @ts-check

const EOL = "\n";
const GITHUB_REPO_URL = "https://github.com/Vad1mAlekseev/LeetCodeProblemSolving";
const LEETCODE_URL = "https://leetcode.com";

/**
 * Build GitHub url from file path.
 * @param {string} pathToFile Relative to the project root file path.
 * @returns GitHub path url;
 */
function generateGithubUrl(pathToFile) {
  return `${GITHUB_REPO_URL}/blob/main/${pathToFile}`;
}

/**
 * Build LeetCodee url from problem id.
 * @param {string} id Problem id.
 */
function generateLeetcodeUrl(id) {
  return `${LEETCODE_URL}/problems/${id}`;
}

/**
 * Generate table body from problems array.
 * @param {array} problems The problems.
 * @returns Table body.
 */
function generateTableBody(problems) {
  return problems
    .map(
      (problem, idx) =>
        `|${idx + 1}|[${problem.title}](${generateLeetcodeUrl(problem.id)})|${problem.difficulty}|${problem.solvings
          .map((solut) => `[${solut.title}](${generateGithubUrl(solut.path)})`)
          .join(", ")}|`
    )
    .join(EOL);
}

/**
 *
 * @param {{ id: string, title: string, solvings: { title: string, path: string }[], difficulty: string}[]} problems Collected solvings.
 * @returns
 */
module.exports = (problems) => {
  /**
   * Compute difficulties count.
   * @returns difficulties count
   */
  function computeDifficultiesCount() {
    return problems.reduce((acc, curr) => {
      acc[curr.difficulty] = (acc[curr.difficulty] || 0) + 1;
      return acc;
    }, {});
  }

  /**
   *
   * @param {string} summary Table header.
   * @param {(item: problems[0]) => boolean} [predicate] For filter problems.
   * @returns The table.
   */
  function generateSolvingsTable(summary, predicate) {
    return `<details>
<summary>${summary}</summary>

| #     | Problem            | Difficulty | Solutions       |
|:-----:|:------------------:|:----------:|:---------------:|
${predicate ? generateTableBody(problems.filter(predicate)) : generateTableBody(problems)}

</details>`;
  }

  const difficultyAmounts = computeDifficultiesCount();

  return `# This repo contains my solvings leetcode problems

This file was generated automatically by [build.js](${generateGithubUrl("scripts/build.js")}) script.

Count of all problems solved: ${problems.length}

${Object.keys(difficultyAmounts)
  .map((key) => `Count of solved problems with difficulty "${key}": ${difficultyAmounts[key]}`)
  .join(EOL + EOL)}

${generateSolvingsTable("All solvings")}
${generateSolvingsTable('Solvings with difficulty "Hard"', (p) => p.difficulty === "Hard")}
${generateSolvingsTable('Solvings with difficulty "Medium"', (p) => p.difficulty === "Medium")}
${generateSolvingsTable('Solvings with difficulty "Easy"', (p) => p.difficulty === "Easy")}
`;
};
