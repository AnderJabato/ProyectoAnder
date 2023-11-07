import React from 'react';
import { StyleSheet, View, useWindowDimensions, Platform } from 'react-native';
import Equipo from './equipo';

export default function ListaEquipos({ equipoActual, setEquipoActual, equipos }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 700 || Platform.OS === 'android';

  return (
    <View style={isMobile ? styles.headerMobile : styles.header}>
      {Object.keys(equipos).map((equipo, index) => (
        <Equipo
          key={index}
          equipo={equipo}
          equipoActual={equipoActual}
          setEquipoActual={setEquipoActual}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding:15,
    width: '100%',
    height: 100, 
    borderColor: 'white',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'flex-start', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, 
    backgroundColor: 'black',
  },
  headerMobile: {
    width: '100%',
    height: 400,
    borderColor: 'white',
    borderWidth: 2,
    display: 'flex',
    
    flexDirection: 'column',
    alignItems: 'stretch', // Esto hará que los hijos (equipos) ocupen todo el ancho disponible
    backgroundColor: 'black',
  },
  text: {
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 22,   margin: 10,
    padding: 4,
  },
  equipoMobile: {
    width: '100%', // Ocupa todo el ancho
    padding: 15, // Padding deseado
  },
  
});
