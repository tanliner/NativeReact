### command
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
