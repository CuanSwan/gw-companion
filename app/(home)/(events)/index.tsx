import IonIcons from "@expo/vector-icons/Ionicons";
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";

const events = () => {
  return (
    <ScrollView style={{margin: 5}} contentContainerStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center',height:'100%', gap:30, paddingHorizontal: 10,}}>
        <Link href="/(home)" style={styles.link}>
          <View style={styles.bar}>
            <IonIcons name='compass' size={32} color={'white'}></IonIcons>
              <Text style={styles.text}>Event Tracker</Text>
            <IonIcons name='compass' size={32} color={'white'}></IonIcons>
          </View>
        </Link>
        <Link href="/(home)" style={styles.link}>
          <View style={styles.bar}>
            <IonIcons name='compass' size={32} color={'white'}></IonIcons>
            <Text style={styles.text}>Meta Events</Text>
            <IonIcons name='compass' size={32} color={'white'}></IonIcons>
          </View>
        </Link>
        <Link href="/(home)" style={styles.link}>
          <View style={styles.bar}>
            <IonIcons name='skull' size={32} color={'white'}></IonIcons>
            <Text style={styles.text}>World Boss Tracker</Text>
            <IonIcons name='skull' size={32} color={'white'}></IonIcons>
          </View>
        </Link>
        <Link href="/(home)" style={styles.link}>
          <View style={styles.bar}>
            <IonIcons name='warning' size={32} color={'white'}></IonIcons>
            <Text style={styles.text}>Events Right Now</Text>
            <IonIcons name='warning' size={32} color={'white'}></IonIcons>
          </View>
        </Link>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  bar:{
    height: '100%',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  link:{
    width: '100%',
    height: 60,
    borderRadius: 5,
    backgroundColor: '#a01316',
  }
})

export default events
