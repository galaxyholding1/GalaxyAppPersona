import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard2Screen from '../screens/Dashboard2Screen';
import ProfileStack from './ProfileStack'; // Stack para el perfil/ajustes

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4c3b90',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      {/* Menú principal: dashboard con API */}
      <Drawer.Screen name="Dashboard" component={Dashboard2Screen} />

      {/* Perfil y configuración */}
      <Drawer.Screen name="Configuración" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


