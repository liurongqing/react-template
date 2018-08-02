import { ENV } from './constant/index';

const Offline = require('offline-plugin/runtime');

if (!ENV.ENV_DEV) {
  Offline.install();
}
