
[简书-原生应用嵌入RN界面](https://juejin.im/entry/58e7431eda2f60005ff3cbcf)
[github-ToNative](https://github.com/cokernut/ReactNativeToNative)

### command alias
alias bundlejs='react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/'


### note
buildscript {
    repositories {
        google()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/node_modules/react-native/android"
        }
    }
}
allprojects {
    repositories {
        jcenter()
        google()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/node_modules/react-native/android"
        }
    }
}

### RN version
`0.60.0` face book JNI load failed
`0.59.1` app/build.gradle should be `0.59.10`, !!WTF!!


### Ref JNI failed
https://github.com/facebook/react-native/issues/11027
https://github.com/facebook/react-native/issues/25537


### across activity, waiting
https://www.fabrizioduroni.it/2017/12/08/react-native-multiple-instance-rctrootview.html
