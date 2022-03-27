import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import layar1 from './data/layar1';
import layar2 from './data/layar2';
import pesan from './data/pesan';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>

        <Stack.Screen name="layar1" component={layar1} />
        <Stack.Screen name="layar2" component={layar2} />
        <Stack.Screen name="pesan" component={pesan} />
      </Stack.Navigator>

    </NavigationContainer>
  );

};

export default App;