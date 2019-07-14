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
                // App.js
                // const args = this.props.images;
                initialProperties.putStringArrayList("images", imageList);
                return initialProperties;
            }
        };
    };
    @Nullable
    @Override
    protected String getMainComponentName() {
        // Registry.registerComponent("RNActivity", () => App, false)
        return "RNActivity";
    }
}
