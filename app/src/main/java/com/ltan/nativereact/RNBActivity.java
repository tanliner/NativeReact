package com.ltan.nativereact;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * NativeReact.com.ltan.nativereact
 *
 * @ClassName: RNBActivity
 * @Description:
 * @Author: tanlin
 * @Date: 2019-07-12
 * @Version: 1.0
 */
public class RNBActivity extends ReactActivity {

    private static ReactApplicationContext mRAC;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        HoxApplication app = (HoxApplication) getApplication();
        ReactInstanceManager instanceManager = app.getReactNativeHost().getReactInstanceManager();
        mRAC = (ReactApplicationContext) instanceManager.getCurrentReactContext();

    }

    void processArg() {
        Intent intent = getIntent();

        WritableMap map = new WritableNativeMap();
        map.putInt("anInt", intent.getIntExtra("anInt", 0));
        map.putString("anString", intent.getStringExtra("anString"));
        mRAC.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("EventName", map);
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "RNBActivity";
    }
}
