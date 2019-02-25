# #ReactNative 集成友盟社会化分享SDK

> 版权声明：本文为博主原创文章，未经博主允许不得转载。

此文章暂时只针对 Android（安卓）—— 社会化分享。
文章参考自 [友盟 React Native 集成分享SDK文档](https://developer.umeng.com/docs/66632/detail/67587#h2-android10) 、[友盟 React Native 集成 SDK Demo](https://github.com/umeng/React_Native_Compent)、[React native 分享 友盟分享SDK](https://blog.csdn.net/dodiligently/article/details/79818677)。

## ##准备
默认已安装开发环境，可正常在 Android（安卓） 模拟器、真机内调试。

### ###资源链接
1. React Native
    - [React Native 官方文档](http://facebook.github.io/react-native/)
2. 友盟
    - [友盟 React Native 集成分享SDK文档](https://developer.umeng.com/docs/66632/detail/67587#h2-android10)
    - [友盟 SDK 资源下载](https://developer.umeng.com/sdk/reactnative)
    - [友盟 React Native 集成 SDK Demo](https://github.com/umeng/React_Native_Compent)：有疑问时可参考
    - [附录](https://developer.umeng.com/docs/66632/detail/66639)：暂时用不上

### ###创建项目以及下载 SDK

1. 安装 React Native 项目（正常跑完即可在模拟器/真机上看到RN的初始界面）：
    ```
    # 创建项目
    react-native init RNUmengShareDemo
    # 进入项目目录
    cd RNUmengShareDemo
    # 运行项目（android）
    react-native run-android
    ```
2. 下载 友盟分享SDK（[友盟 SDK 资源下载](https://developer.umeng.com/sdk/reactnative)）

    注意这里可以选择各个平台的 SDK （如Android，IOS, React Native等） 以及其他 SDK。

    这里我们选择 **React Native** 分类下的 **社会化分享 SDK**，点击设置可选择你需要平台库（如QQ、微博等）。暂时先选择**新浪微博（精简版）**，然后下载并解压文件。
    
    下载的文件目录（目录中出现的文件版本以自己下载的为准）：
    - Android（与**Android**分类下的文件一致，若担心这里不是最新的，可下载**Android**分类的文件）；所需要的 jar、资源（res）
    - IOS：暂时无视
    - ReactNative：需要的 java、js
    ```
    ├─Android
    │  ├─common
    │  │  └─common_android_1.5.0
    │  │      └─normal
    │  └─share
    │      └─share_android_6.9.0
    │          ├─main
    │          │  ├─libs
    │          │  └─res
    │          │      ├─drawable
    │          │      ├─layout
    │          │      └─values
    │          ├─platforms
    │          │  └─新浪精简版
    │          │      ├─libs
    │          │      └─res
    │          │          └─drawable
    │          └─shareboard
    │              └─libs
    ├─iOS
    │  ├─common
    │  │  └─common_ios_1.5.0
    │  │      └─normal
    │  │          └─UMCommon.framework
    │  │              └─Versions
    │  │                  └─A
    │  │                      └─Headers
    │  └─share
    │      └─share_ios_6.9.0
    │          ├─SocialLibraries
    │          │  └─Sina
    │          ├─UMShare.framework
    │          │  └─Headers
    │          └─UMSocialUI
    │              ├─UMSocialSDKResources.bundle
    │              │  ├─Buttons
    │              │  ├─en.lproj
    │              │  ├─UMSocialPlatformTheme
    │              │  │  └─default
    │              │  ├─UMSocialWaterMark
    │              │  └─zh-Hans.lproj
    │              └─UShareUI.framework
    │                  └─Headers
    └─ReactNative
        ├─common
        │  └─common_reactnative_1.0.0
        │      ├─common_android
        │      ├─common_ios
        │      └─js
        └─share
            └─share_reactnative_1.0.0
                ├─share_android
                └─share_ios
    ```

## ##正式开始
*说明：当前项目根目录为 `/RNUmengShareDemo`*

1.首先将从下载的 jar 文件找到并放入 `\RNUmengShareDemo\android\app\libs`

- `Android\common\common_android_1.5.0\normal`：
    - `umeng-common-1.5.0.jar`
    - `umeng-debug-1.0.0.jar`
- `Android\share\share_android_6.9.0\main\libs`：
    - `umeng-share-core-6.9.0.jar`
    - `umeng-sharetool-6.9.0.jar`
- `Android\share\share_android_6.9.0\shareboard\libs`：
    - `umeng-shareboard-widget-6.9.0.jar`
- `Android\share\share_android_6.9.0\platforms\新浪精简版\libs`（平台支持的jar）：
    - `umeng-share-sina-simplify-6.9.0.jar`

2.然后将 `.java` 文件放入，并修改一些 `.java`。
下面文件将放入`\RNUmengShareDemo\android\app\src\main\java\com\rnumengsharedemo\invokenative`目录下，这个目录根据项目的不同也会有所不同，但都是在 `\android\app\src\main\java`下，`\java`下的就是你的工程路径。invokenative文件夹如果没有则手动创建，可以稍微注意下。
- `\ReactNative\common\common_reactnative_1.0.0\common_android`
    - `DplusReactPackage.java`
    - `RNUMConfigure.java`
- `ReactNative\share\share_reactnative_1.0.0\share_android`
    - `ShareModule.java`

java文件放入后，分别打开可以看到顶部有这句：
```
package com.umeng.soexample.invokenative;
```
将其改为自己的工程路径：
```
package com.reactnative_umengsharedemo.invokenative;
```
接下来打开 `MainApplication.java`，里面需要添加 DplusReactPackage：
```java
// /** 引入文件，这里也是加上的
import com.reactnative_umengsharedemo.invokenative.DplusReactPackage;
import com.reactnative_umengsharedemo.invokenative.RNUMConfigure;
import com.umeng.commonsdk.UMConfigure;
// */

public class MainApplication extends Application implements ReactApplication {

  // 这段加上
  // 设置使用的三方平台的appkey：
  {
    PlatformConfig.setWeixin("wxdc1e388c3822c80b", "3baf1193c85774b3fd9d18447d76cab0");
    //豆瓣RENREN平台目前只能在服务器端配置
    PlatformConfig.setSinaWeibo("3921700954", "04b48b094faeb16683c32669824ebdad", "http://sns.whalecloud.com");
    PlatformConfig.setYixin("yxc0614e80c9304c11b0391514d09f13bf");
    PlatformConfig.setQQZone("100424468", "c7394704798a158208a74ab60104f0ba");
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new DplusReactPackage() // 这行是添加的
      );
    }
```
因为 DplusReactPackge.java 中还引入了 其他SDK，我们只用了分享，所以需要注释它：
```java
// modules.add(new PushModule(reactContext));
// modules.add(new AnalyticsModule(reactContext));
```

并在onCreate()中进行初始化：
```java
@Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    RNUMConfigure.init(this, "59892f08310c9307b60023d0", "Umeng", UMConfigure.DEVICE_TYPE_PHONE, "669c30a9584623e70e8cd01b0381dcb4"); // 这行是添加的
  }
```
然后修改 `MainActivity.java` 文件，这两段都需要：（此时我们就把我们放入的3个.java文件都引用完毕）
```java
// 引入文件
import com.reactnative_umengsharedemo.invokenative.ShareModule;
import com.umeng.socialize.UMShareAPI;
import android.content.Intent;
import android.os.Bundle;

//初始化代码
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  ShareModule.initSocialSDK(this);
}

//回调所需代码
@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
  super.onActivityResult(requestCode, resultCode, data);
  UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
}
```

3.把 `Android`目录下的 `res`目录下的所有文件&文件夹放入android工程目录下（`android\app\src\main\res`）。

4.在 React  Native中使用分享模块

首先我们要吧 .js文件加入前端目录中：
`ReactNative\common\common_reactnative_1.0.0\js\ShareUtil.js` 这个文件放入前端文件中。这里我把它放入项目根目录中的 `src/libs` 下。

在 `App.js` 中引入：
```javascript
import ShareUtil from './src/libs/ShareUtil';
```
使用：
```
ShareUtil.shareboard('text', 'https://static.byn2.top/wap/img/jhs.jpg', 'http://www.livenextdoor.cn/', 'title', [0,1,2,3,4], (code, message) => {
  Alert.alert('title', 'msg: message');
});
```

