package com.ltan.nativereact;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * NativeReact.com.ltan.nativereact
 *
 * @ClassName: RN2Activity
 * @Description:
 * @Author: tanlin
 * @Date: 2019-07-12
 * @Version: 1.0
 */
public class RN2Activity extends ReactActivity {

    private static ReactApplicationContext mRAC;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mRAC = (ReactApplicationContext) getApplicationContext();
    }

    void processArg() {
        getIntent();


        // mRAC.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        //         .emit(mEvent, map);
    }



    @Nullable
    @Override
    protected String getMainComponentName() {
        return "HelloWorld";
    }
}
