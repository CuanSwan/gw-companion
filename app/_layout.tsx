import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs 
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#a01316',
    },
    tabBarLabelStyle: {
      color: 'white',
    },
    tabBarActiveBackgroundColor:'darkred',
  }}>
    <Tabs.Screen name="(home)" 
    options={{
        title: 'Home',
        tabBarIcon: () => null,
        tabBarLabelPosition: 'beside-icon'
      }
    }/>
    <Tabs.Screen name="(settings)"
    options={{
        title: 'Settings',
        tabBarIcon: () => null,
        tabBarLabelPosition: 'beside-icon'
    }}
    />
  </Tabs>;
}
