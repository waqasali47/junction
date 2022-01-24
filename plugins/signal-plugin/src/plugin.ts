import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const signalPluginPlugin = createPlugin({
  id: 'signal-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const SignalPluginPage = signalPluginPlugin.provide(
  createRoutableExtension({
    name: 'SignalPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
