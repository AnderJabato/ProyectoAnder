import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import ListaEquipos from './componentes/ListaEquipos';

export default function App() {
  
  const [esMovil, setEsMobile] = useState();
  useEffect(() => {
    const estadoMovil = Platform.OS === 'android';
    setEsMobile(estadoMovil)
  }, [])
  const equipos = { 
    Barcelona: [
      { nombre: "Ronaldinho", imagen: './assets/${jugador}.jpeg' },
      { nombre: "Messi", imagen:'./assets/${jugador}.jpg' },
      { nombre: "Xavi", imagen: './assets/${jugador}.jpg' },
      { nombre: "Iniesta", imagen: './assets/${jugador}.jpg' }, 
      { nombre: "Puyol", imagen: './assets/${jugador}.jpg' }], 
      Milan: [
      { nombre: "VanBasten", imagen: './assets/${jugador}.jpg' }, 
      { nombre: "Maldini", imagen: './assets/${jugador}.jpg' }, 
      { nombre: "Pirlo", imagen: './assets/${jugador}.jpg' }, 
      { nombre: "Gatuso", imagen: './assets/${jugador}.jpg' }, 
      { nombre: "Baresi", imagen: './assets/${jugador}.jpeg' }], 
      Manchester: [
        { nombre: "Cantona", imagen: './assets/${jugador}.jpg' }, 
        { nombre: "Scholes", imagen: './assets/${jugador}.jpg'  }, 
        { nombre: "Rooney", imagen: './assets/${jugador}.jpg'  }, 
        { nombre: "Best", imagen: './assets/${jugador}.jpg'  },    
        { nombre: "Ferdinand", imagen: './assets/${jugador}.jpg'  }] };
  
 const [equipoActual, setEquipoActual] = useState(null);
 const [jugadorActual, setJugadorActual] = useState(null);      

  console.log('equipoActual:', equipoActual)

  return (
    <View style={styles.container}>
      <ListaEquipos equipoActual={equipoActual} setEquipoActual={setEquipoActual} equipos={equipos} />

      <Body equipoActual={equipoActual} equipos={equipos} jugadorActual={jugadorActual} setJugadorActual={setJugadorActual} />

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '1000px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});