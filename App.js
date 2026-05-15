import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

function getTabIcon(routeName, color, size) {
  const iconMap = {
    Perfil: 'person-outline',
    Habilidades: 'bulb-outline',
    Projetos: 'briefcase-outline',
  };

  return <Ionicons name={iconMap[routeName]} size={size} color={color} />;
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#F97316',
            tabBarInactiveTintColor: '#94A3B8',
            tabBarStyle: {
              backgroundColor: '#0F172A',
              borderTopWidth: 0,
              height: 64,
              paddingBottom: 8,
              paddingTop: 8,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarIcon: ({ color, size }) => getTabIcon(route.name, color, size),
          })}
        >
          <Tab.Screen name="Perfil" component={PerfilScreen} />
          <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
          <Tab.Screen name="Projetos" component={ProjetosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
