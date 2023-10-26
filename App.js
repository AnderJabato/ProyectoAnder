import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Equipo from './componentes/Equipo';
import Jugador from './componentes/Jugador';

export default function App() {
  const [equipos, setEquipo] = useState(['Barcelona', 'Osasuna', 'Atlhetic']); 
  const [jugadores, setJugadores] = useState(['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4', 'Jugador5']);
  const [equipoActual, setEquipoActual] = useState(null);
  const [jugadorActual, setJugadorActual] = useState(null);

  return (
    <View style={styles.container}>
      {equipos.map((equipo, index) => (
        <Equipo
          key={index}
          onClick={() => setEquipoActual(equipo)}
          title={equipo}
        />
      ))}

      {equipoActual &&
        jugadores.map((jugador, index) => (
          <Jugador
            key={index}
            onClick={() => console.log(`${equipoActual}.${jugador}`)}
            title={`${equipoActual}.${jugador}`}
          />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
