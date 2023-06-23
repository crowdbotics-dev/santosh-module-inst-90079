import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const HealthAppDashboard = () => {
  const data = [{
    title: "Steps",
    value: 12000
  }, {
    title: "Calories",
    value: 2500
  }, {
    title: "Heart Rate",
    value: 80
  }, {
    title: "Sleep",
    value: 8
  }];
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Health Dashboard</Text>
      </View>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <View style={styles.dataContainer}>
        {data.map((item, index) => <View key={index} style={styles.dataItem}>
            <Text style={styles.dataTitle}>{item.title}</Text>
            <Text style={styles.dataValue}>{item.value}</Text>
          </View>)}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  header: {
    backgroundColor: "#1E90FF",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  dataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20
  },
  dataItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "45%"
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C9F70",
    marginBottom: 10
  },
  dataValue: {
    fontSize: 16,
    color: "#333333"
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  imageBackground: {
    backgroundColor: "#4C9F70"
  }
});
export default HealthAppDashboard;