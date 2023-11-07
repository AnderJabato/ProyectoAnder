import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, useWindowDimensions, Platform } from 'react-native';

const Equipo = ({ equipo, equipoActual, setEquipoActual }) => {
  const scaleValue = useState(new Animated.Value(1))[0];
  const [isSeleccionado, setIsSeleccionado] = useState(false);
  
  // Obtén las dimensiones actuales de la ventana y determina si está en móvil.
  const { width } = useWindowDimensions();
  const isMobile = width < 700 || Platform.OS === 'android';

  useEffect(() => {
    // Establece si el equipo actual es seleccionado.
    setIsSeleccionado(equipoActual === equipo);
  }, [equipoActual, equipo]);

  const handlePress = () => {
    // Función para manejar cuando un equipo es presionado.
    setEquipoActual(equipo);
  };

  const handleMouseEnter = () => {
    // Anima el botón al entrar el mouse (hover).
    Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleMouseLeave = () => {
    // Anima el botón al salir el mouse (hover).
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Renderiza el componente con estilos condicionales basados en si es móvil o no.
  return (
    <View style={[styles.container, isMobile && styles.containerMobile]}>
      <TouchableOpacity
        onPress={handlePress}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Animated.View 
          style={[
            styles.button, 
            isMobile && styles.buttonMobile, // Aplica estilos móviles si es necesario.
            { 
              transform: [{ scale: scaleValue }],
              backgroundColor: isSeleccionado ? '#FF0000' : '#4CAF50', // Color condicional.
            }
          ]}
        >
          <Text style={styles.buttonText}>{equipo}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos para la vista contenedora.
  container: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilos específicos para móviles para la vista contenedora.
  containerMobile: {
    width: '100%',
    alignItems: 'stretch',
  },
  // Estilos para el botón.
  button: {
    width: 150,
    height: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilos específicos para móviles para el botón.
  buttonMobile: {
    width: '100%',
    padding: 15,
    borderRadius: 0,
  },
  // Estilos para el texto dentro del botón.
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Equipo;
