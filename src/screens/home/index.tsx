import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../../component/posts';
import AntDesign from '@expo/vector-icons/AntDesign';
import Favorites from '../../component/favorite';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 10, // Adiciona espaçamento vertical
          height: Platform.OS === 'ios' ? 90 : 70, // Ajusta a altura da tab bar
        },
        tabBarLabelStyle: {
          paddingBottom: 5, // Espaçamento entre o texto e o ícone
          fontSize: 12, // Ajusta o tamanho da fonte do label
        },
        tabBarIconStyle: {
          marginBottom: 5, // Espaçamento entre o ícone e o label
        },
      }}
    >
      <Tab.Screen 
        name="Início" 
        component={Posts} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Favoritos" 
        component={Favorites} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="staro" size={24} color="black" />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default Home;
