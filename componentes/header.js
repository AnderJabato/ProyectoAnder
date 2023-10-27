import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Equipo from './Equipo';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Equipo></Equipo>
      <Equipo></Equipo>
      <Equipo></Equipo>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});
export default Header;