const fs = require("fs").promises;
const path = require("path");

const TEMP_DIR = 'temp';
const TEMP_FILE_PREFIX = 'tmp-1';
const CLEANUP_INTERVAL_MS = 24 * 60 * 60 * 1000; // Intervalo de 24 horas

/**
 * Cleans up temporary files in the specified directory and sets up periodic cleanup.
 */
async function cleanupTempFiles() {
  async function performCleanup() {
    try {
      const files = await fs.readdir(TEMP_DIR);
      const tempFiles = files.filter(file => file.startsWith(TEMP_FILE_PREFIX));

      await Promise.all(tempFiles.map(file => fs.unlink(path.join(TEMP_DIR, file))));
    
      console.log('Temporary files successfully removed.');
    } catch (error) {
      console.error('Error removing temporary files:', error.message);
    }
  }

  // Perform initial cleanup
  await performCleanup();

  // Set up periodic cleanup
  setInterval(performCleanup, CLEANUP_INTERVAL_MS);
}

module.exports = cleanupTempFiles;
