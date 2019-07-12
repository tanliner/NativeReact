package com.ltan.nativereact;

import com.facebook.react.ReactActivity;

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
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "HelloWorld";
    }
}
