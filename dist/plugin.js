var capacitorAppCore = (function (exports, core) {
    'use strict';

    const AppCore = core.registerPlugin('AppCore', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppCoreWeb()),
    });

    class AppCoreWeb extends core.WebPlugin {
        getAppInfo() {
            throw new Error('Method not implemented.');
        }
        async device() {
            try {
                return {
                    uuid: await this.getUUID(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    isVirtual: false,
                    productName: this.fnBrowserDetect(),
                    osVersion: navigator.appVersion
                };
            }
            catch (e) {
                throw new Error('Method not implemented.');
            }
        }
        async getDeviceCurrentTheme() {
            const body = await document.getElementsByTagName('body')[0];
            const classList = body.classList;
            return { currentTheme: classList.contains('dark') ? 'dark' : (classList.contains('light') ? 'light' : 'default') };
        }
        copyText(inputData) {
            console.log(inputData);
            throw new Error('Method not implemented.');
        }
        pasteText() {
            throw new Error('Method not implemented.');
        }
        getUUID() {
            var d = new Date().getTime(); //Timestamp
            var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16; //random number between 0 and 16
                if (d > 0) { //Use timestamp until depleted
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                }
                else { //Use microseconds since page-load if supported
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }
        fnBrowserDetect() {
            let userAgent = navigator.userAgent;
            let browserName;
            if (userAgent.match(/chrome|chromium|crios/i)) {
                browserName = "chrome";
            }
            else if (userAgent.match(/firefox|fxios/i)) {
                browserName = "firefox";
            }
            else if (userAgent.match(/safari/i)) {
                browserName = "safari";
            }
            else if (userAgent.match(/opr\//i)) {
                browserName = "opera";
            }
            else if (userAgent.match(/edg/i)) {
                browserName = "edge";
            }
            else {
                browserName = "No browser detection";
            }
            return browserName;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AppCoreWeb: AppCoreWeb
    });

    exports.AppCore = AppCore;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
