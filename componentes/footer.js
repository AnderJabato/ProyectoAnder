import { StyleSheet, Text, View } from 'react-native';

export default function footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.buttonText}>www.equipo.com</Text>
      <Text style={styles.buttonText}>123456789</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  footer: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderColor: 'white',
    borderWidth: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});