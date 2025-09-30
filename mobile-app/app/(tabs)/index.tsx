import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../modules/auth/api/auth.api';
import { logout, setUserState } from '../modules/auth/reducers/authSlice';
import { FirebaseAuthUtils } from '../utilities/firebase';
import COLORS from '../utilities/theme';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  async function signOut() {
    try {
      await FirebaseAuthUtils.signOutUser();
      dispatch(logout());
      console.log("User logged out")
      router.push("/(auth)");
    } catch (error) {
      console.error("Google Sign-Out error:", error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>I am in the app</Text>
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