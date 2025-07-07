import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg from "react-native-svg";
import Bg from "../assets/welcome_bg.svg";
import Logo from "../assets/galaxy_logo.svg";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
 
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleKYC = () => {
    navigation.navigate(""); // TODO: Agregar ruta
  };

  return (
    <View style={styles.container}>
      {/* Fondo SVG completamente ajustado a la pantalla */}
      <View style={StyleSheet.absoluteFill}>
        <Bg width={width} height={height} preserveAspectRatio="none" />
      </View>

      {/* Contenido sobre el fondo */}
      <Text style={styles.title}>Bienvenid@s al futuro</Text>

      <Logo width={150} height={150} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
          <Text style={styles.btnText}>crear cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleKYC}>
          <Text style={styles.kycButton}>¿Eres empresa?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginTop: 40,
  },
  brand: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
    marginTop: 10,
  },
  buttonContainer: {
    width: "80%",
  },
  registerBtn: {
    backgroundColor: "#ec008c",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: "#ff6a00",
    padding: 15,
    borderRadius: 12,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
  },
  kycButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    marginTop: 5,
  },
});

export default WelcomeScreen;


