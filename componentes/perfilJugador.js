import { Image, StyleSheet, Text, View } from 'react-native';

export default function perfilJugador({ jugadorActual, esMovil }) {
  const containerStyle = esMovil ? styles.containerMobile : styles.containerWeb;
  return (
    <View style={containerStyle}>
      <View style={styles.imagenJugador}>
        {
          jugadorActual ? (
            <Image
              source={require(`../assets/${jugadorActual}.jpg`)}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          ) : (
            <Text>
              Selecciona un jugador
            </Text>
          )
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
  imagenJugador: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
  },
  imageStyle: {
    width: '400px',
    margin: 'auto',
    height: '100%',
    objectFit: 'cover',
  },
});