import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import React, { useEffect, useState } from 'react'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/Platypi-Regular.ttf"),
  });

  const [selectedCategory, setSelectedCategory] = useState("gym");
  const [facilityHours, setFacilityHours] = useState({}); // Store all hours in one object

  // Facility endpoints
  const facilityNames = [
    "bruin-fit", "jwc", "epicuria", "deNeve", "feast", "bPlate", 
    "bCafe", "cafe1919", "rende", "study", "drey", "epicAckerman", 
    "rieberTrucks", "sproulTrucks"
  ];

  // Function to fetch facility hours dynamically
  const fetchFacilityHours = async () => {
    const newHours = {};
    try {
      for (const facility of facilityNames) {
        const response = await fetch(`http://127.0.0.1:5001/api/facility/${facility}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        newHours[facility] = data.data; // Store hours in state object
      }
      setFacilityHours(newHours); // Update state after all requests
    } catch (error) {
      console.error("Error fetching facilities:", error.message || error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchFacilityHours();
  }, []);

  // Facility data categorized
  const facilities = {
    gym: [
      { name: "Bruin Fit", key: "bruin-fit" },
      { name: "John Wooden", key: "jwc" }
    ],
    dining: [
      { name: "Epicuria", key: "epicuria" },
      { name: "De Neve", key: "deNeve" },
      { name: "Feast", key: "feast" },
      { name: "Bruin Plate", key: "bPlate" },
      { name: "Bruin Cafe", key: "bCafe" },
      { name: "Cafe 1919", key: "cafe1919" },
      { name: "Rendezvous", key: "rende" },
      { name: "The Study at Hedrick", key: "study" },
      { name: "The Drey", key: "drey" },
      { name: "Epicuria at Ackerman", key: "epicAckerman" },
      { name: "Rieber Food Trucks", key: "rieberTrucks" },
      { name: "Sproul Food Trucks", key: "sproulTrucks" }
    ]
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BruinOnTime</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory("gym")}>
          <Text style={selectedCategory === "gym" ? styles.selected : styles.unselected}>Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("dining")}>
          <Text style={selectedCategory === "dining" ? styles.selected : styles.unselected}>Dining</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {facilities[selectedCategory].map((facility) => (
          <View key={facility.key} style={styles.facilityCard}>
            <Text style={styles.facilityName}>{facility.name}</Text>
            <Text style={styles.facilityHours}>{facilityHours[facility.key] || "Loading..."}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  selected: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginHorizontal: 10,
  },
  unselected: {
    fontSize: 18,
    color: "gray",
    marginHorizontal: 10,
  },
  facilityCard: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  facilityName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  facilityHours: {
    fontSize: 16,
    color: "gray",
  }
});
