// @ts-check

const fs = require("fs");
const path = require("path");

const EOL = "\n";

/**
 * Separate file name from extension.
 * @param {string} fileName The name of file.
 */
function separateNameFromExtension(fileName) {
  const extensionIdx = fileName.lastIndexOf(".");
  const nameWithoutExtension = fileName.substring(0, extensionIdx);
  const extension = fileName.substring(extensionIdx + 1);
  return [nameWithoutExtension, extension];
}

/**
 *
 * @param {string} filePath
 * @return {string}
 */
function getFeature(filePath) {
  const content = fs.readFileSync(filePath);
  const lines = content.toString().split(EOL);

  return lines[0] && lines[0].startsWith("// ") ? lines[0].substring(3) : null;
}

/**
 * Collect all solvings and receive info about them.
 * @returns {Promise<{ id: string, solvings: { extension: string, path: string, feature?: string }[], difficulty: string}[]>} Collected solvings.
 */
module.exports = async () => {
  const solvingsFolderPath = path.join(__dirname, "..", "Solvings");
  const diffucultyFolders = fs.readdirSync(solvingsFolderPath);

  const problemSolvings = diffucultyFolders.reduce((difficulties, difficulty) => {
    const solvings = fs.readdirSync(path.join(solvingsFolderPath, difficulty));

    const currentDifficultySolvings = solvings.reduce((allSolvings, solvingFileName) => {
      const [solvingId, extension] = separateNameFromExtension(solvingFileName);
      const problemWithSameId = allSolvings.find((problem) => problem.id === solvingId);

      const solvPath = path.join(difficulty, solvingFileName);
      const absSolvPath = path.join(solvingsFolderPath, solvPath)
      const solvingInfo = { extension, path: solvPath, feature: getFeature(absSolvPath) };
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
