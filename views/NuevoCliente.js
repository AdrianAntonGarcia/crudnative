import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

export const NuevoCliente = () => {
  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');

  const leerNombre = () => {
    console.log('Escribiendo el nombre');
  };
  return (
    <View style={globalStyles.contenerdor}>
      <Headline style={globalStyles.titulo}>Añadir nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Adri"
        onChangeText={text => setNombre(text)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="24324324"
        onChangeText={text => setTelefono(text)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={text => setCorreo(text)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={text => setEmpresa(text)}
        value={empresa}
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
