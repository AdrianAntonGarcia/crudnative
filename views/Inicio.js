import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, FlatList, View} from 'react-native';
import {List} from 'react-native-paper';

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
  return (
    <View>
      <FlatList
        keyExtractor={cliente => cliente.id.toString()}
        data={clientes}
        renderItem={({item}) => (
          <List.Item title={item.nombre} description={item.empresa} />
        )}
      />
    </View>
  );
};

export default Inicio;
