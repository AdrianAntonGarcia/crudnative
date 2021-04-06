import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Inicio} from './views/Inicio';
import {NuevoCliente} from './views/NuevoCliente';
import {DetallesCliente} from './views/DetallesCliente';

const Stack = createStackNavigator();

// Definir el tema de nuestro diseño
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655GB',
  },
};

console.log(theme);
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.surface,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen component={Inicio} name="Inicio" />
          <Stack.Screen
            component={NuevoCliente}
            name="NuevoCliente"
            options={{title: 'Nuevo Cliente'}}
          />
          <Stack.Screen
            component={DetallesCliente}
            name="DetallesCliente"
            options={{title: 'Detalles Cliente'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
