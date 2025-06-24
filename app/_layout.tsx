import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs 
  screenOptions={{
    headerStyle:{
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <Tabs.Screen name="index"/>
    <Tabs.Screen name="details"/>
  </Tabs>;
}
