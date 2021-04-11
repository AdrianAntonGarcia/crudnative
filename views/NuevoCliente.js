import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

export const NuevoCliente = () => {
  const leerNombre = () => {
    console.log('Escribiendo el nombre');
  };
  return (
    <View style={globalStyles.contenerdor}>
      <Headline style={globalStyles.titulo}>Añadir nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Adri"
        onChangeText={() => leerNombre()}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="24324324"
        onChangeText={() => leerNombre()}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={() => leerNombre()}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={() => leerNombre()}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
