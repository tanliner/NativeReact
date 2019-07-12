package com.ltan.nativereact;

import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import java.util.ArrayList;
import java.util.Arrays;

public class RNActivity extends ReactActivity {

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected Bundle getLaunchOptions() {
                Bundle initialProperties = new Bundle();
                ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(
                        "http://foo.com/bar1.png",
                        "http://foo.com/bar2.png"
                ));
                initialProperties.putStringArrayList("images", imageList);
                return initialProperties;
            }
        };
    };
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "FirstNav";//这个在Registry.registerComponent注册
    }
}
