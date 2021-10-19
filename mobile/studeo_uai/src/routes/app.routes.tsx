import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Success from '../pages/Success';
import AppTabs from './AppTabs';
import ClassDTO from '../DTOS/Class';
import Exit from '../pages/Exit';

export type AppParamList = {
  DatePicker: undefined;
  AppTabs: undefined;
  EditProfile: undefined;
  Login: undefined;
  SplashScreen: undefined;
  Details: { class: ClassDTO };
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  SignUp1: undefined;
  SignUp2: undefined;
  AccountSaved: undefined;
  ProfileSaved: undefined;
  AttendedClass: undefined;
  Exit: undefined;
};

const App = createStackNavigator<AppParamList>();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="AppTabs" component={AppTabs} />
    <App.Screen name="Exit" component={Exit} />
  </App.Navigator>
);

export default AppRoutes;
