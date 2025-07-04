import IonIcons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const HomeScreen = () => {
  const styles = GlobalStyles
  return (
    <View style={styles.body}>
      <Link style={styles.link} href="./news">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="information-circle" />
          <Text style={styles.text}>News</Text>
          <IonIcons style={styles.icons} size={32} name="information-circle" />
        </View>
      </Link>
      <Link style={styles.link} href="./(profile)">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="person" />
          <Text style={styles.text}>Profile</Text>
          <IonIcons style={styles.icons} size={32} name="person" />
        </View>
      </Link>
      <Link style={styles.link} href="https://wiki.guildwars2.com/wiki/Main_Page">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="book" />
          <Text style={styles.text}>Wiki</Text>
          <IonIcons style={styles.icons} size={32} name="book" />
        </View>
      </Link>
      <Link style={styles.link} href="./(events)">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="compass" />
          <Text style={styles.text}>Events</Text>
          <IonIcons style={styles.icons} size={32} name="compass" />
        </View>
      </Link>
      <Link style={styles.link} href="./(gemstore)">
        <View style={styles.bar}>
          <IonIcons style={styles.icons} size={32} name="diamond" />
          <Text style={styles.text}>Black Lion Trading Company</Text>
          <IonIcons style={styles.icons} size={32} name="diamond" />
        </View>
      </Link>
    </View>
  );
};


export default HomeScreen;
