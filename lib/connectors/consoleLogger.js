import c from 'colors/safe';

/**
 * log in console
 *
 * @param {string} msg
 */
function log(msg) {
  console.log('[INFO]', msg);
}

/**
 * log warn in console
 *
 * @param {string} msg
 */
function warn(msg) {
  console.warn(c.yellow('[WARN]'), c.yellow(msg));
}

/**
 * Log error in console
 *
 * @param {string} msg
 */
function error(msg) {
  console.error(c.red('[ERROR]'), c.red(msg));
}

/**
 * Log debug in console
 *
 * @param {string} msg
 */
function debug(msg) {
  console.log(c.blue('[DEBUG]'), c.blue(msg));
}

/**
 * Get logger instance
 *
 * @returns {Logger}
 */
export function getLogger() /*: Logger*/ {
  return {log, warn, error, debug};
}
