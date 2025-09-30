import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../modules/auth/api/auth.api';
import { logout, setUserState } from '../modules/auth/reducers/authSlice';
import { FirebaseAuthUtils } from '../utilities/firebase';
import COLORS from '../utilities/theme';

export default function HomeScreen() {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  async function onGoogleButtonPress() {
    try {
      const userToken = await FirebaseAuthUtils.signInWithGoogle();

      if (userToken) {
        const response = await login({ idToken: userToken.idToken })
        dispatch(setUserState({
          idToken: userToken.idToken!,
          user: response?.data[0],
        }));
        console.log("userToken",userToken)
        console.log("Server returned:", response?.data);
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  }
  async function signOut() {
    try {
      await FirebaseAuthUtils.signOutUser();
      dispatch(logout());
      console.log("User logged out")
    } catch (error) {
      console.error("Google Sign-Out error:", error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
        <Button title="Sign in with Google" onPress={onGoogleButtonPress} />
        <Button title="Sign out with Google" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.white,
    padding: 16
  }
});