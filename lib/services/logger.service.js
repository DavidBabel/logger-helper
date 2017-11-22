/* @flow */

import {getLogger as getConsoleLogger} from '../connectors/consoleLogger';
import {getLogger as getPapertrailLogger} from '../connectors/papertrailLogger';

/**
 * Cache logger instance to avoid calling the connector multiple times
 */
let cacheLogger: Logger;

/**
 * Get logger instance from connectors
 *
 * @returns {Logger}
 */
function getLogger(isLocal: boolean): Logger {
  if (cacheLogger) {
    return cacheLogger;
  }

  if (process.env.NODE_ENV === 'test') {
    const stub = () => undefined;

    // Return test stub
    return {log: stub, debug: stub, warn: stub, error: stub};
  }

  if (isLocal) {
    cacheLogger = getConsoleLogger();
  } else {
    cacheLogger = getPapertrailLogger();
  }

  return cacheLogger;
}

/**
 * Send debug message to logger
 *
 * @param {string} msg
 * @param {Logger} logger
 */
export function debug(msg: string, logger: Logger = getLogger()) {
  logger.debug(msg);
}

/**
 * Send log message to logger
 *
 * @param {string} msg
 * @param {Logger} logger
 */
export function log(msg: string, logger: Logger = getLogger()) {
  logger.log(msg);
}

/**
 * Send warn message to logger
 *
 * @param {string} msg
 * @param {Logger} logger
 */
export function warn(msg: string, logger: Logger = getLogger()) {
  logger.warn(msg);
}

/**
 * Send error message to logger
 *
 * @param {string} msg
 * @param {Logger} logger
 */
export function error(msg: string, logger: Logger = getLogger()) {
  logger.error(msg);
}
