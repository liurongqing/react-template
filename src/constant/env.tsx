const env = process.env.NODE_ENV;

export default {
  ENV_DEV: env === 'development',
  ENV_PROD: env === 'production',
};
