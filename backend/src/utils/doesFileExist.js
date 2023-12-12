const fs = require("fs");

/**
 * Checks if a file with a specific prefix exists in the specified directory.
 * 
 * @param {string} prefix - The prefix to look for in the file names.
 * @returns {Promise<string | null>} - A Promise that resolves to the name of the first file found with the given prefix, or null if no such file exists.
 */
async function doesFileExist(prefix, path) {

  try {
    const files = await fs.promises.readdir(path);

    const exists = files.find(file => file.startsWith(`${prefix}_`));
   
    return exists;
  } catch (error) {
    console.error('Error reading directory:', error);
    return false;
  }
}

module.exports = doesFileExist;