import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#260F0D'
      }}
    >

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >
        Coffe with Programation
      </Text>

      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 300
        }}
        source={require('../assets/images/coffe.jpg')}
      />

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >{'</> {...} function'}</Text>

      
      <Link href="/products" style={styles.button} asChild>
        <Pressable >

          <Text style={styles.buttonText}>
            Acessar Coffe WP
          </Text>

        </Pressable>
      </Link>



    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#F2D8C2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});
