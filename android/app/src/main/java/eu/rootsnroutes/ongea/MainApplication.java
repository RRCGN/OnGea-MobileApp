package eu.rootsnroutes.ongea;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.transistorsoft.rnbackgroundfetch.RNBackgroundFetchPackage;
import com.mapbox.rctmgl.RCTMGLPackage;
import com.imagepicker.ImagePickerPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import im.shimo.react.cookie.CookieManagerPackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNBackgroundFetchPackage(),
            new ImagePickerPackage(),
            new RNLanguagesPackage(),
            new CookieManagerPackage(),
            new RNExitAppPackage(),
            new ReactNativePushNotificationPackage(),
            new SplashScreenPackage(),
            new VectorIconsPackage(),
            new LinearGradientPackage(),
            new RNFetchBlobPackage(),
            new ReactNativeConfigPackage(),
            new RCTMGLPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
