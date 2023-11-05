import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaJugadores from './ListaJugadores';
import PerfilJugador from './PerfilJugador';

const Body = ({
  equipoActual,
  equipos,
  jugadorActual,
  setJugadorActual,
  esMovil
}) => {
  return (
    <View style={styles.body}>
      <ListaJugadores
        stylesProp={styles.bodyAside}
        equipoActual={equipoActual}
        equipos={equipos}
        jugadorActual={jugadorActual}
        setJugadorActual={setJugadorActual}
        esMovil={esMovil}
      />
      <PerfilJugador
        jugadorActual={jugadorActual}
        esMovil={esMovil}
      />
    </View>
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
  
});

export default Body;