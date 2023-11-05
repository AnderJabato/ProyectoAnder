import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

const Equipo = ({ equipo, equipoActual, setEquipoActual }) => {
  const scaleValue = useState(new Animated.Value(1))[0];
  const [isSelecionado, setIsSeleccionado] = useState(false);

  useEffect(() => {
    setIsSeleccionado(equipoActual === equipo);
  }, [equipoActual, equipo]);

  const handlePress = () => {
    setEquipoActual(equipo);
  };

  const handleMouseEnter = () => {
    Animated.timing(scaleValue, {
      toValue: 1.2,
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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Animated.View 
          style={[
            styles.button, 
            { 
              transform: [{ scale: scaleValue }],
              backgroundColor: isSelecionado ? '#FF0000' : '#4CAF50', // Rojo si seleccionado, verde si no
            }
          ]}
        >
          <Text style={styles.buttonText}>{equipo}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Equipo;
