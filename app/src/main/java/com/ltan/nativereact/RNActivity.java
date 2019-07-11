package com.ltan.nativereact;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;

public class RNActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "ThirdActivity";//这个在Registry.registerComponent注册
    }
}
