import { Stack } from 'expo-router';

export default function HomeLayout() {
  return <Stack
  screenOptions={({route})=>({
      headerTintColor: 'white',
      headerTitleStyle:{
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#a01316',
        color: 'white'
      },
      headerShown: ['wiki', 'index', 'news'].includes(route.name),
  })
  }
  >
    <Stack.Screen name='index'
    options={{
        title: 'Home',
    }}/>
    <Stack.Screen name='(events)'
    options={{
        title: 'Events',
    }}/>
    <Stack.Screen name='(profile)'
    options={{
      title: 'Profile'
    }}
    />
    <Stack.Screen name="news"
      options={
        {title: 'News'}
      }
    />
    <Stack.Screen name="(gemstore)"
    options={{
      title: 'Black Lion Trading Company'
    }}
    />
  </Stack>;
}