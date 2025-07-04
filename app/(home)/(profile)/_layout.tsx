import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: 'Profile'}}/>
    <Stack.Screen name="(bank)/index" options={{title: 'Bank'}}/>
    <Stack.Screen name="(guild)/index" options={{title: 'Guild'}}/>
  </Stack>;
}