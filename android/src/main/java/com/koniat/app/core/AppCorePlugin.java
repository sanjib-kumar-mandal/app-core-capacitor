package com.koniat.app.core;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

import java.util.TimeZone;

@CapacitorPlugin(name = "AppCore")
public class AppCorePlugin extends Plugin {

    ClipboardManager clipboard = (ClipboardManager) getActivity().getSystemService(Context.CLIPBOARD_SERVICE);
    private AppCore implementation = new AppCore();

    @PluginMethod
    public void getAppInfo (PluginCall call) {
        try {
            PackageManager pm = getContext().getPackageManager();
            String pkgName = getContext().getPackageName();
            PackageInfo pkgInfo = pm.getPackageInfo(pkgName, 0);
            JSObject result = new JSObject();
            result.put("versionName", pkgInfo.versionName);
            result.put("versionCode", pkgInfo.versionCode);
            result.put("packageName", pkgInfo.packageName);
            result.put("lastUpdateTime", pkgInfo.lastUpdateTime);
            result.put("appInfo", pkgInfo.applicationInfo);
            call.resolve(result);
        } catch (PackageManager.NameNotFoundException e) {
            call.reject(e.getLocalizedMessage());
        }
    }

    @PluginMethod
    public void device(PluginCall call) {
        try{
            String uuid = Settings.Secure.getString(getActivity().getContentResolver(), Settings.Secure.ANDROID_ID);
            String model = android.os.Build.MODEL;
            String productName = android.os.Build.PRODUCT;
            String manufacturer = android.os.Build.MANUFACTURER;
            String serial = android.os.Build.SERIAL;
            String osVersion = android.os.Build.VERSION.RELEASE;
            TimeZone tz = TimeZone.getDefault();

            JSObject result = null;
            result.put("uuid", uuid);
            result.put("model", model);
            result.put("productName", productName);
            result.put("manufacturer", manufacturer);
            result.put("serial", serial);
            result.put("osVersion", osVersion);
            result.put("timeZone", tz.getID());
            result.put("isVirtual", android.os.Build.FINGERPRINT.contains("generic") ||
                    android.os.Build.PRODUCT.contains("sdk"));
            call.resolve(result);
        } catch(Exception e) {
            call.reject(e.getLocalizedMessage());
        }

    }

    @PluginMethod
    public void copyText(PluginCall call) {
        try {
            String text = call.getString("text");
            ClipData clip = ClipData.newPlainText("Text", text);
            clipboard.setPrimaryClip(clip);
            call.resolve();
        } catch (Exception e) {
            call.reject(e.getLocalizedMessage());
        }
    }

    @PluginMethod
    public void pasteText(PluginCall call) {
        try {
            String text = "";
            ClipData clip = clipboard.getPrimaryClip();
            if (clip != null) {
                ClipData.Item item = clip.getItemAt(0);
                text = item.getText().toString();
            }
            JSObject result = null;
            result.put("text", text);
            call.resolve(result);
        } catch (Exception e) {
            call.reject(e.getLocalizedMessage());
        }
    }

    @PluginMethod
    public void getDeviceCurrentTheme(PluginCall call) {
        try{
            int uiMode = getActivity().getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
            boolean enabled = uiMode == Configuration.UI_MODE_NIGHT_YES;
            JSObject result = null;
            result.put("currentTheme", enabled ? "dark" : "light");
            call.resolve(result);
        } catch (Exception e){
            call.reject(e.getLocalizedMessage());
        }
    }
}
