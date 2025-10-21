import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import COLORS from '../utilities/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.light.primary,
        tabBarShowLabel: true,
        tabBarButton: HapticTab,
        tabBarStyle: {
          elevation: 4,
          backgroundColor: COLORS.light.white,
          borderColor: COLORS.light.white,
          height: 70,
          shadowColor: COLORS.light.gray,
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 3,
          alignItems:'center'
        },
        tabBarItemStyle: {
          marginVertical: 6 
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        sceneStyle: {
          backgroundColor: COLORS.light.white
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus" color={color} />,
        }}
      /><Tabs.Screen
        name="marketplace"
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="storefront.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
