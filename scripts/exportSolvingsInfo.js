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
 * Collect all solvings and receive info about them.
 * @returns {Promise<{ id: string, solvings: { extension: string, path: string }[], difficulty: string}[]>} Collected solvings.
 */
module.exports = async () => {
  const solvingsFolderPath = path.join(__dirname, "..", "Solvings");
  const diffucultyFolders = fs.readdirSync(solvingsFolderPath);

  const problemSolvings = diffucultyFolders.reduce((difficulties, difficulty) => {
    const solvings = fs.readdirSync(path.join(solvingsFolderPath, difficulty));

    const currentDifficultySolvings = solvings.reduce((allSolvings, solvingFileName) => {
      const [solvingId, extension] = separateNameFromExtension(solvingFileName);
      const problemWithSameId = allSolvings.find((problem) => problem.id === solvingId);

      const solvingInfo = { extension, path: path.join(difficulty, solvingFileName) };
      if (!problemWithSameId)
        allSolvings.push({
          id: solvingId,
          solvings: [solvingInfo],
          difficulty,
        });
      else problemWithSameId.solvings.push(solvingInfo);

      return allSolvings;
    }, []);

    difficulties.push(...currentDifficultySolvings);

    return difficulties;
  }, []);

  return problemSolvings;
};
