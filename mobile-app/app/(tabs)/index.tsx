import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FirebaseAuthUtils } from '../utilities/firebase';
import COLORS from '../utilities/theme';

export default function HomeScreen() {
  async function onGoogleButtonPress() {
    try {
      const userCredential = await FirebaseAuthUtils.signInWithGoogle();

      console.log("Firebase user:", userCredential);
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
        <Button title="Sign in with Google" onPress={onGoogleButtonPress} />
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