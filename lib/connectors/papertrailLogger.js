/* @flow */
import winston from 'winston';
import config from '../config';
require('winston-papertrail').Papertrail;

// RFC 5424 levels
const levels = {
  debug: 7,
  info: 6,
  notice: 5,
  warn: 4,
  error: 3,
};

const colors = {
  debug: 'blue',
  info: 'green',
  notice: 'yellow',
  warn: 'yellow',
  error: 'red',
};

/**
 * Get logger instance
 *
 * @returns {Logger}
 */
export function getLogger(): Logger {
  if (
    config.papertrailLevel === undefined ||
    config.papertrailUrl === undefined ||
    config.papertrailPort === undefined
  ) {
    throw new Error('PAPERTRAIL_{LEVEL,PORT,URL} are required');
  }

  const winstonLogger = new winston.Logger({
    levels: levels,
    colors: colors,
  });

  winstonLogger.add(winston.transports.Papertrail, {
    handleExceptions: true,
    level: config.papertrailLevel,
    host: config.papertrailUrl,
    port: config.papertrailPort,
    program: config.papertrailProgram,
    hostname: config.papertrailHostname,
  });

  return winstonLogger;
}
