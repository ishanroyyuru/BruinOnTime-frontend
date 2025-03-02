import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/Platypi-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          BruOn Time
        </Text>
      </View>

      <Text style={styles.date}>
        June 13, 2022
      </Text>

      <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.title}>Gym</Text>
          <Text style={styles.subtitle}>8:00 AM - 8:00 PM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.title}>Library</Text>
          <Text style={styles.subtitle}>9:00 AM - 5:00 PM</Text>
        </View>
      </TouchableOpacity>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', // Align all items to the left
    justifyContent: 'flex-start',
    paddingTop: 75, // Move the content down to avoid the top bar clipping
    paddingLeft: 20, // Add padding to the left for consistent margins
    paddingRight: 20, // Add padding to the right as well
  },
  title: {
    marginBottom: 15, // Adjust margin for spacing below the title
  },
  titleText: {
    color: "#2774AD",
    fontSize: 45,
    fontWeight: 500000,
    fontFamily: "Platypi",
    textAlign: 'left', // Title is now left-justified
  },
  date: {
    color: "#888888",
    fontSize: 18,
    fontFamily: "General Sans",
    fontWeight: "bold",
    marginBottom: 30, // Add some space before the headers
    textAlign: 'left', // Date is left-justified
  },
  button: {
    backgroundColor: '#2774AD', // Background color of the button
    padding: 15,
    borderRadius: 10,
    width: "100%", // Adjust the width to your preference
    marginVertical: 10, // Add spacing between buttons
    elevation: 5, // Optional: add shadow for Android

  },
  buttonContent: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5, // Space between title and subtitle
  },

});
