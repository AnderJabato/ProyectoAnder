import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Equipo 1</Text>
        <Text style={styles.text}>Equipo 2</Text>
        <Text style={styles.text}>Equipo 3</Text>
    </View>
);
}

const styles = StyleSheet.create({
  header: {
    borderColor: 'black',
    borderWidth: 2,
    height:100,
    flexDirection:'row',
    alignItems:'center',
    
  }, 
  text: {
    color:'black',
    borderColor:'black',
    borderWidth:1,
    fontSize:22,
    margin:10,
    padding:4

  },
});