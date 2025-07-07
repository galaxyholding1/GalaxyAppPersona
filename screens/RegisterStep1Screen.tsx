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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/galaxy_logo1.svg';

const RegisterStep1Screen = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setBirthDate(date);
    hideDatePicker();
  };

  const handleContinue = () => {
    if (name && lastName && documentId && birthDate) {
      navigation.navigate('RegisterStep3');
    }
  };

    return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#1d1d1d' : '#fff' },
      ]}
    >
      <View style={styles.progressBar}>
        <View style={[styles.step, styles.activeStep]} />
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.step} />
        ))}
      </View>

      <Logo width={100} height={100} style={styles.logo} />
      <Text
        style={[
          styles.title,
          { color: isDark ? '#f96d00' : '#ec008c' },
        ]}
      >
        datos personales
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#333' : '#e0e0e0',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Nombre"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#333' : '#e0e0e0',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Apellidos"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#333' : '#e0e0e0',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Documento de identidad"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={documentId}
        onChangeText={setDocumentId}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#333' : '#e0e0e0',
          },
        ]}
        onPress={showDatePicker}
      >
        <Text style={{ color: birthDate ? (isDark ? '#fff' : '#000') : '#999' }}>
          {birthDate
            ? new Date(birthDate).toLocaleDateString()
            : 'Fecha de nacimiento'}
        </Text>
        <Icon name="calendar" size={18} color="#888" style={styles.icon} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
        locale="es_ES"
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDark ? '#ec008c' : '#f75c03' },
        ]}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#1d1d1d' },
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
    alignSelf: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#fff',
  },
  icon: {
    marginLeft: 'auto',
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

export default RegisterStep1Screen;
