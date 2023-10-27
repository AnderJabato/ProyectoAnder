import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Jugador = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>Jugador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#2196F3',  // Color azul para diferenciar del ejemplo anterior
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Jugador;
