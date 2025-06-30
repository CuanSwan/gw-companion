import { Stack } from "expo-router";

export default function GemstoreLayout() {
  return <Stack>
    <Stack.Screen name="index"
    options={{
        title: 'Black Lion Trading Company'
    }}
    />
  </Stack>;
}
