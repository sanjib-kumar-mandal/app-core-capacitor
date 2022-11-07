import { registerPlugin } from '@capacitor/core';
const AppCore = registerPlugin('AppCore', {
    web: () => import('./web').then(m => new m.AppCoreWeb()),
});
export * from './definitions';
export { AppCore };
//# sourceMappingURL=index.js.map