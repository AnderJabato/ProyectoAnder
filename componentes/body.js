import React from 'react';
import { StyleSheet, View, useWindowDimensions, Platform } from 'react-native';
import ListaJugadores from './ListaJugadores';
import PerfilJugador from './PerfilJugador';

const maxWidthForMobile = 700; // Establece el ancho máximo para considerar que es una vista móvil

const Body = ({
  equipoActual,
  equipos,
  jugadorActual,
  setJugadorActual
}) => {
  const { width } = useWindowDimensions();
  const shouldHideBody = width < maxWidthForMobile || Platform.OS === 'android';

  return (
    // Renderiza condicionalmente el componente `Body` basado en el ancho y la plataforma
    !shouldHideBody ? (
      <View style={styles.body}>
        <ListaJugadores
          equipoActual={equipoActual}
          equipos={equipos}
          jugadorActual={jugadorActual}
          setJugadorActual={setJugadorActual}
        />
        <PerfilJugador
          jugadorActual={jugadorActual}
        />
      </View>
    ) : null
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '500px',
    borderColor: 'white',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  // Añade aquí el resto de tus estilos...
});

export default Body;
