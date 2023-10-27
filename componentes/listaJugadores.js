import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Jugador from './Jugador';

const ListaJugadores = (props) => {
  return (
    <View style={styles.container}>
      <Jugador></Jugador>
      <Jugador></Jugador>
      <Jugador></Jugador>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: flex,
  },

});
export default ListaJugadores;