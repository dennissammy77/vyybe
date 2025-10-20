import COLORS from '@/app/utilities/theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type PageWrapperProps = {
  children: React.ReactNode;
  style?: any
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, style, ...props }) => (
  <SafeAreaView style={[styles.container, style]} {...props}>
    {children}
  </SafeAreaView>
)

export default PageWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.background,
    padding: 16
  },
})