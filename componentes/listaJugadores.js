import { StyleSheet, View } from 'react-native';
import Jugador from './Jugador';

export default function ListaJugador({ stylesProp, equipoActual, equipos, jugadorActual, setJugadorActual, esMovil }) {
  const containerStyle = esMovil ? styles.containerMobile : styles.containerWeb;
  const jugadores = equipos[equipoActual];

  return (
    <View style={containerStyle}>
      <View style={styles.asideStyle}>
        {equipoActual &&
          jugadores.map((jugador, index) => (
            <Jugador
              key={index}
              nombre={jugador.nombre}
              jugadorActual={jugadorActual}
              setJugadorActual={setJugadorActual}
            />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMobile: {
    flex: 1,
    order: 2,
  },
  containerWeb: {
    flex: 1,
    order: 1,
  },
  text: {
    color: 'black',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 22,
    margin: 10,
    padding: 4,
  },
  asideStyle: {
    width: 200,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
