import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './pages/splash';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import Starttrip from './pages/starttrip';
import Bustype from './pages/bustype';
import Trip from './pages/trip';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="SingUp"
          options={{headerShown: false}}
          component={Signup}
        />
        <Stack.Screen
          name="Start_Trip"
          options={{headerShown: false}}
          component={Starttrip}
        />
        <Stack.Screen
          name="Bus_Type"
          options={{headerShown: false}}
          component={Bustype}
        />
        <Stack.Screen
          name="Trip"
          options={{headerShown: false}}
          component={Trip}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
