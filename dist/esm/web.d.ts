import { WebPlugin } from '@capacitor/core';
import type { AppCorePlugin, AppInfo, DeviceResult } from './definitions';
export declare class AppCoreWeb extends WebPlugin implements AppCorePlugin {
    getAppInfo(): Promise<AppInfo>;
    device(): Promise<DeviceResult>;
    getDeviceCurrentTheme(): Promise<any>;
    copyText(inputData: {
        text: string;
    }): Promise<void>;
    pasteText(): Promise<void>;
    private getUUID;
    private fnBrowserDetect;
}
