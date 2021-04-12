import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

export const Inicio = () => {
  // state de la app
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const {data} = await axios.get('http://10.0.2.2:3000/clientes');
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesApi();
  }, []);
  return <Text>Desde Inicio</Text>;
};

export default Inicio;
