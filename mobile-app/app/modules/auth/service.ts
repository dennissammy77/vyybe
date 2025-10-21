import { FirebaseAuthUtils } from "@/components/utilities/firebase";

export class AuthUtils{
  static async signOutUser(){
    try {
      await FirebaseAuthUtils.signOutUser();
      return true;
    } catch (error) {
      console.error("Google Sign-Out error:", error);
      throw new Error("Google Sign-Out error:")
    }
  };
};