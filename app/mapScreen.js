import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = ({ address }) => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address,
            key: 'AIzaSyBFxb8mLYzMUtje-soCBYwl33AVmrSgh1E', // Substitua pela sua chave de API do Google
          },
        });

        if (response.data.results.length > 0) {
          const location = response.data.results[0].geometry.location;
          setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        } else {
          console.log('Endereço não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar as coordenadas:', error);
      }
    };

    fetchCoordinates();
  }, [address]);

  if (!region) {
    return (
      <View style={styles.container}>
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        loadingEnabled={true}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title={address}
          description={`Localização de: ${address}`}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
