import axios from 'axios';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/global';

export const NuevoCliente = ({navigation, route}) => {
  const {setConsultarAPI, cliente} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      setConsultarAPI,
    });
  }, [navigation, setConsultarAPI]);
  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);
  //Detectar si estamos editando o no
  useEffect(() => {
    if (route.params.cliente) {
      console.log('Estamos editando');
      const {nombre, telefono, correo, empresa} = route.params.cliente;
      setNombre(nombre);
      setTelefono(telefono);
      setCorreo(correo);
      setEmpresa(empresa);
    } else {
      console.log('Nuevo Cliente');
    }
  }, [route.params.cliente]);

  const guardarCliente = async () => {
    // Validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }
    // Generar el cliente
    const cliente = {nombre, telefono, correo, empresa};
    // Si estamos editando o creando un nuevo cliente
    if (route.params.cliente) {
      // Editar el cliente en la api
      const {id} = route.params.cliente;
      cliente.id = id;
      try {
        if (Platform.OS === 'ios') {
          // para ios
          await axios.put(`http://localhost:3000/clientes/${id}`, cliente);
        } else {
          // para android
          await axios.put(`http://10.0.2.2:3000/clientes/${id}`, cliente);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // Guardar el cliente en la api
      try {
        if (Platform.OS === 'ios') {
          // para ios
          await axios.post('http://localhost:3000/clientes', cliente);
        } else {
          // para android
          await axios.post('http://10.0.2.2:3000/clientes', cliente);
        }
      } catch (error) {
        console.log(error);
      }
    }
    // Redireccionar
    navigation.navigate('Inicio');
    // Limpiar el form (opcional)
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');
    // Guardar consultar API para detectar que hay un nuevo cliente
    setConsultarAPI(true);
  };
  return (
    <View style={globalStyles.contenerdor}>
      <Headline style={globalStyles.titulo}>A??adir nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Adri"
        onChangeText={text => setNombre(text)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Tel??fono"
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
      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>
      <Portal>
        <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlerta(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
