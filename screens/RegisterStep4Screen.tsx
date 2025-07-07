import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'; // agregado useEffect
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  RegisterStep4: undefined;
  RegisterStep5: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterStep4'>;

const RegisterStep4Screen: React.FC<Props> = ({ navigation }) => {
  const [situacionLaboral, setSituacionLaboral] = useState<string>('');
  const [sectorTrabajo, setSectorTrabajo] = useState<string>('');
  const [origenFondos, setOrigenFondos] = useState<string>('');
  const [esCiudadanoEEUU, setEsCiudadanoEEUU] = useState<boolean | null>(null);

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const isFormComplete =
    !!situacionLaboral && !!sectorTrabajo && !!origenFondos && esCiudadanoEEUU !== null;

  const styles = getStyles(isDark);

  const handleContinue = () => {
    if (isFormComplete) {
      navigation.navigate('RegisterStep5');
    }
  };

   return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color={isDark ? 'white' : 'black'}
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.progress}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={index < 4 ? styles.stepActive : styles.stepInactive}
          />
        ))}
      </View>

      <Text style={styles.logo}>
        galaxy<Text style={styles.logoBold}>pay</Text>
      </Text>
      <Text style={styles.title}>Información laboral</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={situacionLaboral}
          onValueChange={setSituacionLaboral}
          style={styles.picker}
          dropdownIconColor={isDark ? '#fff' : '#000'}
        >
          <Picker.Item label="¿Cuál es tu situación laboral?" value="" />
          <Picker.Item label="Ingresos salariales" value="ingresos_salariales" />
          <Picker.Item label="Prestaciones del Gobierno" value="prestaciones_gobierno" />
          <Picker.Item label="Pensión" value="pension" />
          <Picker.Item label="Subvenciones" value="subvenciones" />
          <Picker.Item label="Donaciones" value="donaciones" />
          <Picker.Item label="Ingresos por alquiler" value="alquiler" />
          <Picker.Item label="Ingresos familiares" value="familiares" />
          <Picker.Item label="Ingresos del mercado de valores" value="mercado_valores" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sectorTrabajo}
          onValueChange={setSectorTrabajo}
          style={styles.picker}
          dropdownIconColor={isDark ? '#fff' : '#000'}
        >
          <Picker.Item label="¿En qué sector trabajas?" value="" />
          <Picker.Item label="Agencias de Viajes e inmobiliarias" value="agencias_viajes_inmobiliarias" />
          <Picker.Item label="Agricultura, ganadería y pesca" value="agricultura_ganaderia_pesca" />
          <Picker.Item label="Arte, joyería, casas de empeño y armas" value="arte_joyeria_empeno_armas" />
          <Picker.Item label="Banca y seguros" value="banca_seguros" />
          <Picker.Item label="Comercio de vehículos y servicios" value="comercio_vehiculos_servicios" />
          <Picker.Item label="Construcción" value="construccion" />
          <Picker.Item label="Deporte, entretenimiento y gastronomía" value="deporte_entretenimiento_gastronomia" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={origenFondos}
          onValueChange={setOrigenFondos}
          style={styles.picker}
          dropdownIconColor={isDark ? '#fff' : '#000'}
        >
          <Picker.Item label="Origen previsto de fondos" value="" />
          <Picker.Item label="Nómina" value="nomina" />
          <Picker.Item label="Ahorros" value="ahorros" />
          <Picker.Item label="Herencia" value="herencia" />
          <Picker.Item label="Otros" value="otros" />
        </Picker>
      </View>

      <Text style={styles.label}>¿Es ciudadano/residente fiscal de EE.UU.?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setEsCiudadanoEEUU(true)}
        >
          <View
            style={[
              styles.radioCircle,
              esCiudadanoEEUU === true && styles.selected,
            ]}
          />
          <Text style={styles.radioText}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setEsCiudadanoEEUU(false)}
        >
          <View
            style={[
              styles.radioCircle,
              esCiudadanoEEUU === false && styles.selected,
            ]}
          />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormComplete && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!isFormComplete}
      >
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStep4Screen;

// Estilos (se mantienen tal como los tenías)
const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#f2f2f2',
      padding: 20,
      justifyContent: 'center',
    },
    backIcon: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    progress: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 20,
      gap: 5,
    },
    stepActive: {
      width: 30,
      height: 4,
      backgroundColor: '#ff2c92',
      borderRadius: 2,
    },
    stepInactive: {
      width: 30,
      height: 4,
      backgroundColor: '#bbb',
      borderRadius: 2,
    },
    logo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
      textAlign: 'center',
      marginBottom: 10,
    },
    logoBold: {
      fontWeight: 'bold',
      color: '#ff2c92',
    },
    title: {
      textAlign: 'center',
      color: '#f5731a',
      marginBottom: 20,
    },
    pickerContainer: {
      backgroundColor: isDark ? '#333' : '#ddd',
      borderRadius: 10,
      marginBottom: 15,
      paddingHorizontal: 5,
    },
    picker: {
      color: isDark ? '#fff' : '#000',
      height: 50,
      width: '100%',
    },
    label: {
      color: isDark ? '#fff' : '#000',
      marginTop: 20,
      marginBottom: 10,
    },
    radioGroup: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 30,
    },
    radioCircle: {
      height: 18,
      width: 18,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: isDark ? '#fff' : '#000',
      marginRight: 8,
    },
    selected: {
      backgroundColor: '#ff2c92',
      borderColor: '#ff2c92',
    },
    radioText: {
      color: isDark ? '#fff' : '#000',
    },
    button: {
      backgroundColor: '#ff2c92',
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
    },
    buttonDisabled: {
      backgroundColor: '#5a1a3f',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });


