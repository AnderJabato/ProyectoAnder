import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.text}>www.equipo.com</Text>
        <Text style={styles.text}>123456789</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  
  footer: {
    borderColor: 'black',
    borderWidth: 2,
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
});