
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// react-native-audio-record
import com.goodatlas.audiorecord.RNAudioRecordPackage;
// react-native-audio-recorder-player
import com.dooboolab.audiorecorderplayer.RNAudioRecorderPlayerPackage;
// react-native-document-picker
import com.reactnativedocumentpicker.DocumentPickerPackage;
// react-native-image-crop-picker
import com.reactnative.ivpusic.imagepicker.PickerPackage;
// react-native-image-to-pdf
import com.anyline.RNImageToPDF.RNImageToPdfPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-recording
import cn.qiuxiang.react.recording.RecordingPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// rn-fetch-blob
import com.RNFetchBlob.RNFetchBlobPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new AsyncStoragePackage(),
      new RNAudioRecordPackage(),
      new RNAudioRecorderPlayerPackage(),
      new DocumentPickerPackage(),
      new PickerPackage(),
      new RNImageToPdfPackage(),
      new LinearGradientPackage(),
      new ReanimatedPackage(),
      new RecordingPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new VectorIconsPackage(),
      new RNFetchBlobPackage()
    ));
  }
}
