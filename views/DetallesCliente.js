import React from 'react';
import {Text} from 'react-native';

export const DetallesCliente = ({route}) => {
  console.log(route.params);
  return <Text>Desde Nuevo Cliente</Text>;
};

export default DetallesCliente;
