import { Tabs } from 'expo-router';

export default function ProfileLayout() {
  return <Tabs> 
    <Tabs.Screen name="index"/>
    <Tabs.Screen name="materials" options={{title: 'Material'}}/>
  </Tabs>;
}