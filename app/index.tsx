import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} >
      <Text>Home</Text>
      <Link href="/details">View details</Link>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
    })