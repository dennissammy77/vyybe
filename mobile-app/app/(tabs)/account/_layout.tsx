import COLORS from "@/components/utilities/theme";
import { Stack } from "expo-router";

export default function AccountStackLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: COLORS.light.white,
          padding: 8
        },
        headerStyle: {
          backgroundColor:COLORS.light.white,
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Profile", headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: COLORS.light.white },
          headerTintColor: COLORS.light.black,
        }}
      />
    </Stack>
  );
}