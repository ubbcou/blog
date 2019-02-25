package com.reactnative_umengsharedemo;

import com.facebook.react.ReactActivity;

import com.reactnative_umengsharedemo.invokenative.ShareModule;
import com.umeng.socialize.UMShareAPI;
import android.content.Intent;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactNative_UmengShareDemo";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
			super.onCreate(savedInstanceState);
			ShareModule.initSocialSDK(this);
    }

		@Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
			super.onActivityResult(requestCode, resultCode, data);
			UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
    }
}
