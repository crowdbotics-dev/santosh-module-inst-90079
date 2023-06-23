import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HealthAppWelcomeScreen = () => {
  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <Text style={styles.title}>Welcome to Health App</Text>
        <Text style={styles.subtitle}>Your personal health assistant</Text>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: { ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  }
});
export default HealthAppWelcomeScreen;