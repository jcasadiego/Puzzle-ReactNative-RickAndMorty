//packages
import React, {useContext} from 'react';

//native components
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import DrawerNavigator from './Drawer';
import {Auth} from '../provider/AuthProvider';
import {LoginScreen, Registro, ResetPassword} from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const {IsLogin} = useContext(Auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {IsLogin ? (
          <>
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="Drawer" component={DrawerNavigator} />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
              <Stack.Screen name="Registro" component={Registro} />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
