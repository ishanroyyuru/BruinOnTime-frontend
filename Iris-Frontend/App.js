import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import React, { useEffect, useState } from 'react'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/Platypi-Regular.ttf"),
  });

  const [selectedCategory, setSelectedCategory] = useState("gym");
  const [facilityHours, setFacilityHours] = useState({});

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
        newHours[facility] = data.data;
      }
      setFacilityHours(newHours); 
    } catch (error) {
      console.error("Error fetching facilities:", error.message || error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchFacilityHours();
  }, []);

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
    backgroundColor: '#f1f5f9',
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 40,
    color: '#0c2a66', // UCLA Blue
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  selected: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#ffb81c', // UCLA Gold
    marginHorizontal: 15,
  },
  unselected: {
    fontSize: 20,
    color: '#0c2a66', // UCLA Blue
    marginHorizontal: 15,
  },
  facilityCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  facilityName: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#0c2a66', // UCLA Blue
  },
  facilityHours: {
    fontSize: 16,
    color: "#555555",
    marginTop: 5,
  }
});
