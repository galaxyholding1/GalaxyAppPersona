import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PasswordRecoveryScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Lógica para enviar el correo de recuperación
    console.log('Enviar email de recuperación a:', email);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150x40.png?text=galaxypay' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Título y texto */}
      <Text style={styles.title}>Recuperación de contraseña</Text>
      <Text style={styles.subtitle}>
        Introduce tu email para recuperar tu contraseña. Recibirás un correo con instrucciones.
      </Text>
      <Text style={styles.infoText}>
        Si estás experimentando problemas recuperando la contraseña, contáctanos{' '}
        <Text style={styles.linkText}>aquí</Text>.
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="e-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen' as never)}>
          <Ionicons name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/50x50.png?text=Logo' }} style={styles.centerLogo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bar-chart-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen' as never)}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordRecoveryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1c', paddingHorizontal: 16 },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 40, paddingBottom: 10 },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 150, height: 40 },
  title: { color: '#e54690', fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { color: '#ccc', fontSize: 13, textAlign: 'center', marginBottom: 8 },
  infoText: { color: '#ccc', fontSize: 12, textAlign: 'center', marginBottom: 20 },
  linkText: { color: '#f08139' },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e54690',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  centerButton: {
    width: 56, height: 56, backgroundColor: '#1c1c1c',
    borderRadius: 28, justifyContent: 'center', alignItems: 'center',
    marginTop: -20,
  },
  centerLogo: { width: 40, height: 40, borderRadius: 20 },
});

