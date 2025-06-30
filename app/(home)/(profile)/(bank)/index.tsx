
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BankScreen(){
  const [selected, setSelected] = useState('Bank')
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text>Bank</Text>
      </View>
      <View>
        <Text>Materials</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '20%',
    width: '10%',
    backgroundColor: 'red'
  },
  tab: {
    height: '50%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

