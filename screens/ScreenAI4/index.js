import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const EducationAppDashboard = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Education App Dashboard</Text>
      </View>
      <View style={styles.card}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Mathematics</Text>
          <Text style={styles.cardText}>Learn and practice math problems</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Science</Text>
          <Text style={styles.cardText}>Explore the world of science</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>History</Text>
          <Text style={styles.cardText}>Discover the past and learn from it</Text>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#1E90FF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  cardContent: {
    flex: 1
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardText: {
    fontSize: 16,
    color: '#555'
  }
});
export default EducationAppDashboard;