import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet } from "react-native";

const SignupScreen = () => {
  return <ImageBackground source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.background}>
      <View style={styles.container}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  loginText: {
    fontSize: 14,
    marginRight: 5
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E90FF"
  }
});
export default SignupScreen;