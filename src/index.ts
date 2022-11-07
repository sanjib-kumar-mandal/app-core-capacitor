import { registerPlugin } from '@capacitor/core';

import type { AppCorePlugin } from './definitions';

const AppCore = registerPlugin<AppCorePlugin>('AppCore', {
  web: () => import('./web').then(m => new m.AppCoreWeb()),
});

export * from './definitions';
export { AppCore };
