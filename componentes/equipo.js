// equipo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Equipo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Botón del equipo presionado!')}>
        <Text style={styles.buttonText}> Equipo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});

export default Equipo;
