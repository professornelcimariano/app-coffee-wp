import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }
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
        style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >
        Coffee With Programation
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
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}>
        <Icon name="coffee" size={30} color="#fff" />
        {'</> {...} function'}
      </Text>


      <Link href="/products" style={styles.button} asChild>
        <TouchableOpacity >

          <Text style={styles.buttonText}>
            Ver menu
          </Text>

        </TouchableOpacity>
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
    borderRadius: 30,

  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});
