import { StyleSheet, View } from 'react-native';
import Equipo from './equipo';

export default function ListaEquipos({ equipoActual, setEquipoActual, equipos }) {
  return (
    <View style={styles.header}>
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
    width: '100%',
    height: 100, // Asegúrate de que las dimensiones sean números o strings que representen números
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'flex-start', // 'start' no es un valor válido, debes usar 'flex-start'
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, // 'gap' no está soportado en todas las versiones de React Native, verifica si funciona en tu entorno
    backgroundColor: 'black',
  },
  text: {
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 22,
    margin: 10,
    padding: 4,
  },
});
