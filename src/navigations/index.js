import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Splash from '../screens/splash';
import GetStarted from '../screens/get-started';
import Home from '../screens/home';

const AppNavigatorOptions = {
  headerShown: false,
};

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Splash">
      <AppStack.Screen
        name="Splash"
        component={Splash}
        options={AppNavigatorOptions}
      />
      <AppStack.Screen
        name="GetStarted"
        component={GetStarted}
        options={AppNavigatorOptions}
      />
      <AppStack.Screen
        name="Home"
        component={Home}
        options={AppNavigatorOptions}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
