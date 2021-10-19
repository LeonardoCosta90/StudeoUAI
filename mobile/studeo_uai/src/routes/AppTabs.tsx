import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Simple from '../pages/Simple';
import Piston from '../pages/Piston';
import List from '../pages/List';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 26,
          height: 22,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveTintColor: '#A0A0B3',
        activeTintColor: '#8257E5',
        showLabel: false,
      }}
    >
      <Screen
        name="Simple"
        component={Simple}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="google-classroom"
                size={24}
                color={focused ? '#8257E5' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Piston"
        component={Piston}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="google-classroom"
                size={24}
                color={focused ? '#8257E5' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="google-classroom"
                size={24}
                color={focused ? '#8257E5' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={focused ? '#8257E5' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default Tabs;
