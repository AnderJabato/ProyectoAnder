import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

const Jugador = ({ nombre, jugadorActual, setJugadorActual }) => {
  const scaleValue = useState(new Animated.Value(1))[0];
  const [isSeleccionado, setIsSeleccionado] = useState(false);

  useEffect(() => {
    setIsSeleccionado(jugadorActual === nombre);
  }, [jugadorActual, nombre]);

  const handlePress = () => {
    setJugadorActual(nombre);
  };

  const handleMouseEnter = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleMouseLeave = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles.buttonContainer}
    >
      <Animated.View 
        style={[
          styles.jugador,
          {
            transform: [{ scale: scaleValue }],
            backgroundColor: isSeleccionado ? '#FF0000' : '#FA8902', 
          }
        ]}
      >
        <Text style={styles.text}>{nombre}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jugador: {
    width: 150,
    height: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8902', 
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
 
});

export default Jugador;
