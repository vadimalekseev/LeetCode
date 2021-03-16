// @ts-check

const fs = require("fs");
const path = require("path");

/**
 * Separate file name from extension.
 * @param {string} fileName The name of file.
 */
function separateNameFromExtension(fileName) {
  const extension = fileName.lastIndexOf(".");
  return [fileName.substring(0, extension), fileName.substring(extension + 1)];
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
 * Collect all solvings and receive info about them.
 * @returns {Promise<{ id: string, title: string, solvings: { title: string, path: string }[], difficulty: string}[]>} Collected solvings.
 */
module.exports = async () => {
  const solvingsFolderPath = path.join(__dirname, "..", "Solvings");
  const diffucultyFolders = fs.readdirSync(solvingsFolderPath);

  const problemSolvings = diffucultyFolders.reduce((difficulties, difficulty) => {
    const solvings = fs.readdirSync(path.join(solvingsFolderPath, difficulty));

    const currentDifficultySolvings = solvings.reduce((allSolvings, solvingFileName) => {
      const [solvingId, extension] = separateNameFromExtension(solvingFileName);
      const problemWithSameId = allSolvings.find((problem) => problem.id === solvingId);

      const solvingInfo = { title: extension.toUpperCase(), path: path.join(difficulty, solvingFileName) };
      if (!problemWithSameId)
        allSolvings.push({
          id: solvingId,
          title: toPascalCase(solvingId.replace(/-/g, " ")),
          solvings: [solvingInfo],
          difficulty: toPascalCase(difficulty),
        });
      else problemWithSameId.solvings.push(solvingInfo);

      return allSolvings;
    }, []);

    difficulties.push(...currentDifficultySolvings);

    return difficulties;
  }, []);

  return problemSolvings;
};
