import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {List, Headline, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';

export const Inicio = ({navigation}) => {
  // state de la app
  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);
  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const {data} = await axios.get('http://10.0.2.2:3000/clientes');
        setClientes(data);
        setConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (consultarAPI) {
      obtenerClientesApi();
    }
  }, [consultarAPI]);
  return (
    <View style={globalStyles.contenerdor}>
      <Button
        icon="plus-circle"
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}>
        Nuevo Cliente
      </Button>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList
        keyExtractor={cliente => cliente.id.toString()}
        data={clientes}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {item, setConsultarAPI})
            }
          />
        )}
      />
      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}
      />
    </View>
  );
};

export default Inicio;
