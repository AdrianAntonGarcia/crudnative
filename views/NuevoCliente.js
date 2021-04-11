import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

export const NuevoCliente = () => {
  return (
    <View style={globalStyles.contenerdor}>
      <Headline style={globalStyles.titulo}>Añadir nuevo Cliente</Headline>
      <TextInput />
    </View>
  );
};

export default NuevoCliente;
