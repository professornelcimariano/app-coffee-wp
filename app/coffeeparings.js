import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { API_URL } from './config';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

export default function Products() {
  const [coffeeparing, setCoffeeparing] = useState([]);
  useEffect(() => {
    axios.get(API_URL + '/coffeeparings')
      .then(response => {
        setCoffeeparing(response.data.list);
      })
      .catch(error => console.error('Erro ao carregar Coffeeparing:', error));
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {coffeeparing.map(item => (
        <View key={item.id}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ textAlign: 'justify' }}>{item.description}</Text>
          </View>
          <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />
        </View>
      ))}

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }

});