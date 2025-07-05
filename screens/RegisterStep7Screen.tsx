import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';


const OptionCard = ({
  title,
  required,
  expanded,
  onToggle,
  children,
  accepted,
  onAccept,
  onReject,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#3c3c3c' : '#f2f2f2' }]}>
      <TouchableOpacity style={styles.header} onPress={onToggle}>
        <Text style={[styles.headerText, { color: isDark ? '#fff' : '#000' }]}>
          {title} {!required && <Text style={{ color: isDark ? '#bbb' : '#888' }}>Opcional</Text>}
        </Text>
        <View
          style={[
            styles.indicator,
            accepted
              ? { backgroundColor: '#ec4899', borderColor: '#ec4899' }
              : { borderColor: isDark ? '#ffffff' : '#000000' },
          ]}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={[styles.contentBox, { backgroundColor: isDark ? '#444' : '#e6e6e6' }]}>
          <Text style={[styles.contentText, { color: isDark ? '#fff' : '#000' }]}>{children}</Text>
          <View style={styles.buttonsRow}>
            {onReject && (
              <TouchableOpacity onPress={onReject}>
                <Text style={styles.rejectText}>No, gracias</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={onAccept}
              style={[
                styles.acceptButton,
                { backgroundColor: isDark ? '#666' : '#ccc' },
              ]}
            >
              <Text style={{ color: isDark ? '#fff' : '#000' }}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default function RegisterStep7Screen() {
  const [expanded, setExpanded] = useState(null);
  const [accepted, setAccepted] = useState({
    terms: false,
    privacy: false,
    contacts: false,
    updates: false,
    partners: false,
  });

  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const toggleExpanded = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  const setAccept = (key, value = true) => {
    setAccepted({ ...accepted, [key]: value });
    setExpanded(null);
  };

  const allRequiredAccepted = accepted.terms && accepted.privacy;

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1E1E1E' : '#fff' }]}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={[styles.mainText, { color: isDark ? '#fff' : '#000' }]}>
            Para crear una cuenta Galaxy Pay, por favor acepta los términos y condiciones.
          </Text>
        </View>

        {[
          {
            key: 'terms',
            title: 'Términos y condiciones',
            required: true,
            content:
              'Solicito una cuenta corriente galaxy pay y acepto el contrato de licencia de la app...',
          },
          {
            key: 'privacy',
            title: 'Política de Privacidad',
            required: true,
            content:
              'La Política de Privacidad de galaxy pay aplica y el contenido está disponible...',
          },
          {
            key: 'contacts',
            title: 'Visibilidad para contactos',
            required: false,
            content:
              'Habilita la visibilidad para aprovechar todas las funciones de la app galaxy pay...',
          },
          {
            key: 'updates',
            title: 'Actualizaciones',
            required: false,
            content:
              'Puedes habilitar la opción de recibir notificaciones sobre novedades...',
          },
          {
            key: 'partners',
            title: 'Partnerships',
            required: false,
            content:
              'Por este medio, consiento a que galaxy pay envíe mi dirección de correo electrónico...',
          },
        ].map(({ key, title, required, content }) => (
          <OptionCard
            key={key}
            title={title}
            required={required}
            expanded={expanded === key}
            accepted={accepted[key]}
            onToggle={() => toggleExpanded(key)}
            onAccept={() => setAccept(key)}
            onReject={required ? null : () => setAccept(key, false)}
            theme={theme}
          >
            {content}
          </OptionCard>
        ))}

        <TouchableOpacity
          disabled={!allRequiredAccepted}
          style={[
            styles.submitButton,
            { backgroundColor: allRequiredAccepted ? '#ec4899' : '#f9a8d4' },
          ]}
        >
          <Text style={styles.submitText}>Crear mi cuenta Galaxy Pay</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mainText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
  },
  indicator: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  contentBox: {
    marginTop: 12,
    borderRadius: 8,
    padding: 12,
  },
  contentText: {
    fontSize: 13,
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rejectText: {
    color: '#FF9D9D',
    fontWeight: 'bold',
  },
  acceptButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  submitText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
