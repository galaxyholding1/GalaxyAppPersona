import React, { useEffect } from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GalaxyLogo from '../assets/galaxy_logo1.svg';


export default function RegisterStep8Screen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

    return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF' }]}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <GalaxyLogo width={150} height={40} />
      </View>

      {/* Icono */}
      <Ionicons name="checkmark-circle" size={48} color="#FF2D9B" style={styles.icon} />

      {/* Título */}
      <Text style={styles.title}>
        Hemos enviado un correo al email anteriormente indicado
      </Text>

      {/* Instrucción */}
      <Text style={[styles.subtitle, { color: isDark ? '#CCCCCC' : '#333333' }]}>
        Para continuar debes verificar tu cuenta de email, para ello hemos enviado un email a la dirección anteriormente indicada por usted.
      </Text>

      <Text style={[styles.subtitle, { color: isDark ? '#CCCCCC' : '#333333' }]}>
        Haz clic en el enlace que te hemos enviado a nombre@gmail.com para confirmar tu dirección de email. Si no la ves, revisa tu carpeta de spam.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 24,
  },
  title: {
    color: '#FF2D9B',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
});

