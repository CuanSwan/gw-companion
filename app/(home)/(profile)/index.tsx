import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function ProfileScreen(){
  return (
    <View>
      <Link href="./(bank)"><Text>Bank</Text></Link>
      <Link href="./(guild)"><Text>Guild</Text></Link>
    </View>
  )
}

