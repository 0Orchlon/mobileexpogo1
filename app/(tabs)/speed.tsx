import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [speed, setSpeed] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (isTracking) {
      startTracking();
    } else {
      stopTracking();
    }

    return () => {
      stopTracking();
    };
  }, [isTracking]);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Allow location access to calculate speed.");
      return;
    }

    // Start location tracking
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 100, // Update every second
        distanceInterval: 1, // Update every 1 meter
      },
      (loc) => {
        setLocation(loc);
        const speedInMetersPerSecond = loc.coords.speed || 0; // Speed in meters/second
        const speedInKmH = (speedInMetersPerSecond * 3.6).toFixed(2); // Convert to km/h
        setSpeed(speedInKmH);
      }
    );
  };

  const stopTracking = () => {
    setLocation(null);
    setSpeed(0);
    Location.hasServicesEnabledAsync().then((enabled) => {
      if (enabled) {
        Location.stopLocationUpdatesAsync("locationTask");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speed Calculator</Text>
      <Text style={styles.speedText}>{speed} km/h</Text>

      <TouchableOpacity
        style={isTracking ? styles.stopButton : styles.startButton}
        onPress={() => setIsTracking(!isTracking)}
      >
        <Text style={styles.buttonText}>
          {isTracking ? "Stop Tracking" : "Start Tracking"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  speedText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 40,
  },
  startButton: {
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 10,
  },
  stopButton: {
    padding: 15,
    backgroundColor: "#dc3545",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
