import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Logo from '../assets/galaxy_logo1.svg';

type RootStackParamList = {
  RegisterStep6: undefined;
  RegisterStep7: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterStep6'>;

const RegisterStep6Screen: React.FC<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [selectedOption, setSelectedOption] = useState<'no' | 'yes' | null>('no');

  const handleContinue = () => {
    navigation.navigate('RegisterStep7');
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#ffffff' },
      ]}
    >
      {/* Logo como componente */}
      <Logo width={140} height={60} style={{ alignSelf: 'center', marginBottom: 20 }} />

      <Text style={[styles.question, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
        ¿Estás sujeto/a a impuestos en los Estados Unidos?
      </Text>

      <Text
        style={{
          color: '#FF4081',
          textAlign: 'left',
          fontSize: 13,
          marginBottom: 16,
        }}
      >
        Descubre{' '}
        <Text style={{ color: isDarkMode ? '#aaa' : '#444' }}>
          por qué te pedimos esta información
        </Text>
      </Text>

      <Pressable
        style={styles.optionContainer}
        onPress={() => setSelectedOption('no')}
      >
        <Icon
          name={selectedOption === 'no' ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={selectedOption === 'no' ? '#FF4081' : isDarkMode ? '#ccc' : '#555'}
        />
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          No
        </Text>
      </Pressable>

      <Pressable
        style={styles.optionContainer}
        onPress={() => setSelectedOption('yes')}
      >
        <Icon
          name={selectedOption === 'yes' ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={selectedOption === 'yes' ? '#FF4081' : isDarkMode ? '#ccc' : '#555'}
        />
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          Sí, estoy sujeto/a a impuestos en EEUU.
        </Text>
      </Pressable>

      {/* Botón para continuar */}
      <Pressable style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>continuar</Text>
      </Pressable>
    </View>
  );
};

export default RegisterStep6Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 15,
  },
  continueButton: {
    backgroundColor: '#FF4081',
    padding: 14,
    borderRadius: 10,
    marginTop: 40,
  },
  continueText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


