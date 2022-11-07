export interface AppCorePlugin {
    getAppInfo(): Promise<AppInfo>;
    device(): Promise<DeviceResult>;
    getDeviceCurrentTheme(): Promise<any>;
    copyText(inputData: {
        text: string;
    }): Promise<void>;
    pasteText(): Promise<void>;
}
export interface AppInfo {
    versionName?: any;
    versionCode?: any;
    packageName?: any;
    lastUpdateTime?: any;
    appInfo?: any;
}
export interface DeviceResult {
    uuid?: any;
    model?: string;
    productName?: string;
    manufacturer?: any;
    serial?: any;
    osVersion?: any;
    timeZone?: any;
    isVirtual?: boolean;
}
