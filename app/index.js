import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/bkg-one.jpg')}
        style={styles.backgroundOne}
      >
        <View style={styles.overlayOne}>

          <Text
            style={{ fontFamily: 'Roboto-Light', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
          >
            Coffee With Programation
          </Text>

          <Image
            style={{
              width: 300,
              height: 300,
              borderRadius: 300,
              opacity: 1
            }}
            source={require('../assets/images/coffe.jpg')}
          />

          <Text

            style={{ marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}>
            <Icon name="coffee" size={30} color="#fff" /> <Icon name="code" size={20} color="#fff" /> print, function
          </Text>

          <Link href="/products" style={[styles.button, styles.backgroundSecond]} asChild>
            <TouchableOpacity>
              <Text style={styles.buttonOneText}>
                <Icon name="coffee" size={20} /> Cafés
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/about" style={[styles.button, styles.backgroundSecond]} asChild>
            <TouchableOpacity>
              <Text style={styles.buttonOneText}>
                <Icon name="bars" size={20} /> Sobre
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/languages" style={[styles.button, styles.backgroundSecond]} asChild>
            <TouchableOpacity>
              <Text style={styles.buttonOneText}>
                <Icon name="code" size={20} /> Linguagens
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/frameworks" style={[styles.button, styles.backgroundSecond]} asChild>
            <TouchableOpacity>
              <Text style={styles.buttonOneText}>
                <Icon name="bookmark" size={20} /> Frameworks
              </Text>
            </TouchableOpacity>
          </Link>

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     display: 'flex',
//   },
// });
