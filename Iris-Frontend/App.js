import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/Platypi-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Iris
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#028960",
    fontSize: 45,
    fontWeight: "semibold",
    position: "absolute",
    top: "100",
    left: "80",
    fontFamily: "Platypi",
  }
});

