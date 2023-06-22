import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {// handle login functionality
  };

  const handleSignup = () => {// handle signup functionality
  };

  const handleForgotPassword = () => {// handle forgot password functionality
  };

  return <ImageBackground source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  linkText: {
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 5
  }
});
export default LoginScreen;