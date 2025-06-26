import IonIcons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 30,
        margin: "auto",
        width: "90%",
      }}
    >
      {/* <View style={styles.bar}>
        <IonIcons style={styles.icons} size={32} name='information-circle' />
        <Text style={styles.text}>News</Text>
        <IonIcons style={styles.icons} size={32} name="information-circle" />
      </View>
      <View style={styles.bar}>
        <IonIcons style={styles.icons} size={32} name="person" />
        <Text style={styles.text}>Profile</Text>
        <IonIcons style={styles.icons} size={32} name="person" />
      </View>
      <View style={styles.bar}>
        <MaterialIcon style={styles.icons} size={32} name="sack" />
        <Text style={styles.text}>Bank</Text>
        <MaterialIcon style={styles.icons} size={32} name="sack" />
      </View>
      <View style={styles.bar}>
        <MaterialIcon style={styles.icons} size={32} name="shield" />
        <Text style={styles.text}>Guild</Text>
        <MaterialIcon style={styles.icons} size={32} name="shield" />
      </View>
      <View style={styles.bar}>
        <IonIcons style={styles.icons} size={32} name="book" />
        <Text style={styles.text}>Wiki</Text>
        <IonIcons style={styles.icons} size={32} name="book" />
      </View> */}
      <Link style={styles.link} href="/(home)/events">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="compass" />
          <Text style={styles.text}>Events</Text>
          <IonIcons style={styles.icons} size={32} name="compass" />
        </View>
      </Link>
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="diamond" />
          <Text style={styles.text}>Black Lion Trading Company</Text>
          <IonIcons style={styles.icons} size={32} name="diamond" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    backgroundColor: "#a01316",
    color: "white",
    marginHorizontal: 10,
  },
  bar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#a01316",
    borderRadius: 4,
    elevation: 6
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  link:{
    height:'30%',
    width: '100%',
  }
});

export default HomeScreen;
