import { createRouter } from '@internal/plugin-signal-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin(env: PluginEnvironment) {
  console.log('hello from backend');
  return await createRouter({
    logger: env.logger,
  });
}