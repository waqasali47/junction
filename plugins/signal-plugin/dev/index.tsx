import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { signalPluginPlugin, SignalPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(signalPluginPlugin)
  .addPage({
    element: <SignalPluginPage />,
    title: 'Root Page',
    path: '/signal-plugin'
  })
  .render();
