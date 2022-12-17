import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen/registerScreen';
import ForgetPassword from '../../screens/auth/forgetPassword/ForgetPassword';

const authStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <authStack.Navigator>
        <authStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <authStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <authStack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
      </authStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
