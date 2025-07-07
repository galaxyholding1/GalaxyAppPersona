import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard1Screen() {
  const navigation = useNavigation();
  const isDark = useColorScheme() === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#121212' : '#ffffff' }]}>
      {/* Encabezado superior */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: isDark ? '#ffffff' : '#000000' }]}>
            Hola, Usuario
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? '#bbbbbb' : '#555555' }]}>
            Buenos días
          </Text>
        </View>

         <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Abrir menú')}>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido del dashboard */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Contenido del Dashboard</Text>
      </View>

      {/* Acciones rápidas */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="send-outline" size={20} color="#fff" />
          <Text style={styles.actionText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="download-outline" size={20} color="#fff" />
          <Text style={styles.actionText}>Recibir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FF2D9B',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 16,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    fontSize: 10,
    color: '#FF2D9B',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#FF2D9B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});



