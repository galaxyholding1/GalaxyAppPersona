import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useColorScheme,
  Pressable,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'react-native-check-box';
import Logo from '../assets/galaxy_logo1.svg'; // Asegúrate que este SVG esté correctamente configurado

interface Props {
  navigation: any;
}

const RegisterStep1Screen: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const [selectedCountry, setSelectedCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const countryCodes: { [key: string]: string } = {
    CO: '+57',
    MX: '+52',
  };

  useEffect(() => {
    if (selectedCountry && countryCodes[selectedCountry]) {
      const code = countryCodes[selectedCountry];
      if (!phone.startsWith(code)) {
        setPhone(code + ' ');
      }
    }
  }, [selectedCountry]);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inner}>
        <Logo width={120} height={120} style={styles.logo} />

        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Te acompañamos en el proceso de{'\n'}registro de forma sencilla y rápida
        </Text>
        <Text style={styles.subtitle}>
          Indícanos tu país y correo electrónico
        </Text>

        <View style={styles.inputGroup}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={setSelectedCountry}
            style={[
              styles.picker,
              {
                backgroundColor: isDark ? '#333' : '#e0e0e0',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            dropdownIconColor={isDark ? '#fff' : '#000'}
          >
            <Picker.Item label="Selecciona un país" value="" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="México" value="MX" />
          </Picker>

          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#333' : '#e0e0e0',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Teléfono"
            placeholderTextColor="#999"
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#333' : '#e0e0e0',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <View style={styles.checkboxContainer}>
            <CheckBox
              isChecked={acceptedTerms}
              onClick={() => setAcceptedTerms(!acceptedTerms)}
              checkBoxColor={isDark ? '#fff' : '#000'}
            />
            <Text style={[styles.checkboxText, { color: isDark ? '#ccc' : '#333' }]}>
              Acepto términos legales y políticas de privacidad
            </Text>
          </View>
        </View>

        <Text style={[styles.inviteText, { color: isDark ? '#aaa' : '#444' }]}>
          Me han invitado a unirme a una empresa
        </Text>

        <Pressable
          style={styles.continueButton}
          onPress={() => navigation.navigate('RegisterStep1')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: 24,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#f75c03',
    fontSize: 13,
    marginBottom: 20,
  },
  inputGroup: {
    gap: 12,
  },
  picker: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 13,
  },
  inviteText: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#f04e9a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegisterStep1Screen;












