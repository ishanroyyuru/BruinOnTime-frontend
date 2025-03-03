import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import React, { useEffect, useState } from 'react'; // Import useEffect and useState just once

export default function App() {
  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/Platypi-Regular.ttf"),
  });

  const [selectedCategory, setSelectedCategory] = useState("gym");
  const [bruinFitHours, setBruinFitHours] = useState("");
  const [JWCHours, setJWCHours] = useState("");
  const [epicuriaHours, setEpicuriaHours] = useState("");
  const [deNeveHours, setDeNeveHours] = useState("");
  const [feastHours, setFeastHours] = useState("");
  const [bPlateHours, setBPlateHours] = useState("");
  const [bCafeHours, setBCafeHours] = useState("");
  const [cafe1919Hours, setCafe1919Hours] = useState("");
  const [rendeHours, setRendeHours] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const [dreyHours, setDreyHours] = useState("");
  const [epicAckermanHours, setEpicAckermanHours] = useState("");
  const [rieberTrucksHours, setRieberTrucksHours] = useState("");
  const [sproulTrucksHours, setSproulTrucksHours] = useState("");

  // Fetch the data from the backend API
  const fetchBruinFit = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/bruin-fit');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setBruinFitHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchJWC = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/jwc');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setJWCHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchEpicuria = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/epicuria');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setEpicuriaHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchDeNeve = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/deNeve');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setDeNeveHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchFeast = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/feast');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setFeastHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchBPlate = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/bPlate');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setBPlateHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchBCafe = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/bCafe');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setBCafeHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchCafe1919 = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/cafe1919');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setDeNeveHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchRende = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/rende');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setRendeHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchStudy = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/study');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setStudyHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchDrey = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/drey');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setDreyHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchEpicAckerman = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/epicAckerman');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setEpicAckermanHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchRieberTrucks = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/rieberTrucks');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setRieberTrucksHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };

  const fetchSproulTrucks = async () => {
    try {
      // Change localhost to the appropriate IP for Android emulators
      const response = await fetch('http://127.0.0.1:5001/api/facility/sproulTrucks');  // For Android
      // For iOS, use 'localhost:5000' or 'http://127.0.0.1:5001'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data:', data);  // Log the data to check its structure
      setSproulTrucksHours(data.data);  // Assuming the backend sends the data as { data: '...' }
    } catch (error) {
      console.error('Error fetching facilities:', error.message || error);
    }
  };


  // Calling fetchBruinFit once the component mounts
  useEffect(() => {
    fetchBruinFit();
    fetchJWC();
    fetchEpicuria();
    fetchDeNeve();
    fetchFeast();
    fetchBPlate();
    fetchBCafe();
    fetchCafe1919();
    fetchRende();
    fetchStudy();
    fetchDrey();
  }, []);

  // Hardcoded facility data based on selection
  const facilities = {
    gym: [
      { name: "Bruin Fit", hours: bruinFitHours },
      { name: "John Wooden", hours: JWCHours }
    ],
    dining: [
      { name: "De Neve", hours: deNeveHours },
      { name: "Feast", hours: feastHours },
      { name: "Bruin Plate", hours: bPlateHours },
      { name: "Bruin Cafe", hours: bCafeHours },
      { name: "Cafe 1919", hours: cafe1919Hours },
      { name: "Rendezvous", hours: rendeHours },
      { name: "The Study at Hedrick", hours: studyHours },
      { name: "The Drey", hours: dreyHours },
      { name: "Epicuria at Ackerman", hours: epicAckermanHours },
      { name: "Rieber Food Trucks", hours: rieberTrucksHours },
      { name: "Sproul Food Trucks", hours: sproulTrucksHours }
    ]
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BruOn Time</Text>
      </View>

      <Text style={styles.date}>June 13, 2022</Text>

      {/* Binary Selection: Gym or Dining Hall */}
      <View style={styles.selectionContainer}>
        <TouchableOpacity 
          style={[styles.selectionButton, selectedCategory === "gym" && styles.selectedButton]}
          onPress={() => setSelectedCategory("gym")}
        >
          <Text style={styles.selectionButtonText}>Gym</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.selectionButton, selectedCategory === "dining" && styles.selectedButton]}
          onPress={() => setSelectedCategory("dining")}
        >
          <Text style={styles.selectionButtonText}>Dining Hall</Text>
        </TouchableOpacity>
      </View>

      {/* Render buttons dynamically based on selection */}
      <View>
        {facilities[selectedCategory].map((facility, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.facilityTitle}>{facility.name}</Text>
              <Text style={styles.facilitySubtitle}>{facility.hours}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 75,
    paddingLeft: 20,
    paddingRight: 20,
    width: 350,
  },
  title: {
    marginBottom: 15,
  },
  titleText: {
    color: "black",
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Platypi",
    textAlign: 'left',
  },
  date: {
    color: "black",
    fontSize: 24,
    fontFamily: "General Sans",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: 'left',
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: 350, // Ensuring it fills the container
  },
  selectionButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5, // Smaller border radius
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: "black",
  },
  selectionButtonText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 12,
    borderRadius: 5, // Smaller border radius
    width: 350, // Ensuring it fits the container
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  buttonContent: {
    alignItems: 'center',
  },
  facilityTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
  },
  facilitySubtitle: {
    color: "black",
    fontSize: 14,
    marginTop: 5,
  },
});