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

      <View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.facilityTitle}>BFit</Text>
            <Text style={styles.facilitySubtitle}>8:00 AM - 8:00 PM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.facilityTitle}>De Neve</Text>
            <Text style={styles.facilitySubtitle}>9:00 AM - 5:00 PM</Text>
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
    alignItems: 'flex-start', // Align all items to the left
    paddingTop: 75, // Move the content down to avoid the top bar clipping
    paddingLeft: 20, // Add padding to the left for consistent margins
    paddingRight: 20, // Add padding to the right as well
    width: 350,
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
    fontSize: 24,
    fontFamily: "General Sans",
    fontWeight: "bold",
    marginBottom: 30, // Add some space before the headers
    textAlign: 'left', // Date is left-justified
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 350, // Adjust the width to your preference
    marginVertical: 10, // Add spacing between buttons
    borderWidth: 5,
    borderColor: "#FFD100",
  },
  buttonContent: {
    alignItems: 'center',
  },
  facilityTitle: {
    color: "#2774AD",
    fontSize: 22,
    fontWeight: 'bold',
  },
  facilitySubtitle: {
    color: "#2774AD",
    fontSize: 14,
    marginTop: 5, // Space between title and subtitle
  },

});
