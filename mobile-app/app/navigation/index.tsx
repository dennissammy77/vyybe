import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Navigation(){
  const reduxUser = useSelector((state: any) => state.authReducer);

  useEffect(() => {
    if (reduxUser?.token?.accessToken) {
      router.replace('/(tabs)');
    }else{
      router.replace('/(auth)');
    }
  }, [reduxUser]);
  return (
    <Stack
      initialRouteName='(tabs)'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
  );
}