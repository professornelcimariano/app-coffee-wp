// Instale as dependências
// expo install expo-location
// expo install react-native-maps


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distance, setDistance] = useState(null);

  // Campos para o formulário
  const [originLatitude, setOriginLatitude] = useState('');
  const [originLongitude, setOriginLongitude] = useState('');
  const [destinationLatitude, setDestinationLatitude] = useState('');
  const [destinationLongitude, setDestinationLongitude] = useState('');

  useEffect(() => {
    if (useCurrentLocation) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permissão para acessar a localização foi negada.');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setOriginLatitude(location.coords.latitude.toString());
        setOriginLongitude(location.coords.longitude.toString());
      })();
    }
  }, [useCurrentLocation]);

  // Função para calcular a distância entre dois pontos
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Raio da Terra em km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distância em km
  };

  const handleCalculateDistance = () => {
    const lat1 = parseFloat(originLatitude);
    const lon1 = parseFloat(originLongitude);
    const lat2 = parseFloat(destinationLatitude);
    const lon2 = parseFloat(destinationLongitude);

    if (!isNaN(lat1) && !isNaN(lon1) && !isNaN(lat2) && !isNaN(lon2)) {
      const dist = calculateDistance(lat1, lon1, lat2, lon2);
      setDistance(dist.toFixed(2)); // Arredonda para 2 casas decimais
    } else {
      Alert.alert('Erro', 'Por favor, insira coordenadas válidas.');
    }
  };

  let text = 'Obtendo localização...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Sua localização: ${location.coords.latitude}, ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      {/* Formulário de entrada para coordenadas */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Origem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Latitude de origem"
          value={originLatitude}
          onChangeText={setOriginLatitude}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Longitude de origem"
          value={originLongitude}
          onChangeText={setOriginLongitude}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Destino:</Text>
        <TextInput
          style={styles.input}
          placeholder="Latitude de destino"
          value={destinationLatitude}
          onChangeText={setDestinationLatitude}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Longitude de destino"
          value={destinationLongitude}
          onChangeText={setDestinationLongitude}
          keyboardType="numeric"
        />

        <Button title="Calcular Distância" onPress={handleCalculateDistance} />
      </View>

      {/* Exibe o mapa e a distância calculada */}
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(originLatitude),
            longitude: parseFloat(originLongitude),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Marcador do usuário (ou local de origem) */}
          <Marker
            coordinate={{
              latitude: parseFloat(originLatitude),
              longitude: parseFloat(originLongitude),
            }}
            title="Local de origem"
          />

          {/* Marcador do destino */}
          <Marker
            coordinate={{
              latitude: parseFloat(destinationLatitude),
              longitude: parseFloat(destinationLongitude),
            }}
            title="Destino"
          />
        </MapView>
      ) : (
        <Text>{text}</Text>
      )}

      {distance && (
        <Text style={styles.text}>
          {`Distância entre os pontos: ${distance} km`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
});
