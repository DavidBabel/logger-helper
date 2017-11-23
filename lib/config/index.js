/* @flow */

const defaultConfig = {
  ENV_NAME: 'local',
  PAPERTRAIL_LEVEL: '',
  PAPERTRAIL_PORT: '',
  PAPERTRAIL_URL: ''
};

function getConfig(env: Object) {
  const config: Object = !env.ENV_NAME || env.ENV_NAME === 'local' ? defaultConfig : env;

  return {
    envName: config.ENV_NAME,
    papertrailLevel: config.PAPERTRAIL_LEVEL,
    papertrailPort: config.PAPERTRAIL_PORT,
    papertrailUrl: config.PAPERTRAIL_URL,
    papertrailHostname: config.PAPERTRAIL_HOSTNAME,
    papertrailProgram: config.ENV_NAME,
  };
}

export default getConfig(process.env);
