import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../utilities/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
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