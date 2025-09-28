const packageJson = require('./package.json');

const appConfig = {
  expo: {
    name: "vyybe",
    slug: "vyybe-app",
    version: packageJson.version,
    owner: packageJson.author,
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "vyybeapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.vyybe.app"
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      googleServicesFile: "./config/google-services.json",
      package: "com.vyybe.app"
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "@react-native-google-signin/google-signin",
      ],
      [
        "@react-native-firebase/auth"
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000"
          }
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "2e21aaba-4713-4dcc-8992-9b3ae64f0337"
      }
    },
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    }
  }
}

export default appConfig;