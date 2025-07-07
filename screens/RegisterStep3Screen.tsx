// Pantalla del tercer paso del registro: información laboral
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  useColorScheme,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import GalaxyLogo from '../assets/galaxy_logo1.svg'; // SVG importado como componente

type RootStackParamList = {
  RegisterStep3Screen: undefined;
  RegisterStep4Screen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterStep3'>;

const RegisterStep3Screen: React.FC<Props> = ({ navigation }) => {
  const [direccion1, setDireccion1] = useState('');
  const [direccion2, setDireccion2] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [pais, setPais] = useState('');

  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const isComplete = direccion1 && codigoPostal && localidad && provincia && pais;

  const handleContinue = () => {
    if (isComplete) {
      navigation.navigate('RegisterStep4');
    }
  };

   return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#1d1d1d' : '#f9f9f9' },
      ]}
    >
      {/* Barra de progreso */}
      <View style={styles.progressBar}>
        <View style={[styles.step, styles.activeStep]} />
        <View style={[styles.step, styles.activeStep]} />
        {[...Array(4)].map((_, i) => (
          <View key={i} style={styles.step} />
        ))}
      </View>

      {/* Logo SVG */}
      <View style={styles.logo}>
        <GalaxyLogo width={100} height={100} />
      </View>

      <Text style={styles.title}>dirección postal completa</Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="direccion 1"
        placeholderTextColor="#ccc"
        value={direccion1}
        onChangeText={setDireccion1}
      />
      <TextInput
        style={styles.input}
        placeholder="direccion 2"
        placeholderTextColor="#ccc"
        value={direccion2}
        onChangeText={setDireccion2}
      />
      <TextInput
        style={styles.input}
        placeholder="código postal"
        placeholderTextColor="#ccc"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="localidad"
        placeholderTextColor="#ccc"
        value={localidad}
        onChangeText={setLocalidad}
      />
      <TextInput
        style={styles.input}
        placeholder="provincia"
        placeholderTextColor="#ccc"
        value={provincia}
        onChangeText={setProvincia}
      />
      <TextInput
        style={styles.input}
        placeholder="país"
        placeholderTextColor="#ccc"
        value={pais}
        onChangeText={setPais}
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  step: {
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
    flex: 1,
    marginHorizontal: 2,
  },
  activeStep: {
    backgroundColor: '#ec008c',
  },
  logo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#f96d00',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'lowercase',
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#ec008c',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegisterStep3Screen;
