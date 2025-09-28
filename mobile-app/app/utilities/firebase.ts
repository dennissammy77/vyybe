import { CONFIG } from "@/config";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { initializeApp } from "firebase/app";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDQ0DKZpCNQqxZP8F1z-9FR06-yuz7YNC4",
  authDomain: "vyybe-b8546.firebaseapp.com",
  projectId: "vyybe-b8546",
  storageBucket: "vyybe-b8546.firebasestorage.app",
  appId: "1:836159986313:android:5cf2cf36bb03c2ddf1c458",
};

const app = initializeApp(firebaseConfig);

export class FirebaseAuthUtils {
  static signInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        webClientId: CONFIG.ANDROID_GOOGLE_WEB_CLIENT_KEY,
      });
      // Check if your device supports Google Play
      if (Platform.OS === 'android') {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      }
      // Get the users ID token
      const user = await GoogleSignin.signIn();
    
      if (!user) {
        return;
      }

      // 2. Create Firebase credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(user.data?.idToken as string);

      // 3. Sign in with Firebase
      const userCredential = await auth().signInWithCredential(googleCredential);

      console.log("Firebase user:", userCredential.user);
      return userCredential.user
    } catch (error) {
      console.error("Google Sign-In error:", error);
      throw new Error("Google Sign-In error:")
    }
  };
};