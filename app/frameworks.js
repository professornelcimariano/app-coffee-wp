import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from 'react';
// import list from './products.json';
import imageMappings from './imageMappings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from './config';

export default function frameworks() {
    const [frameworks, setframeworks] = useState([]);

    useEffect(() => {
        fetch(API_URL + '/select-frameworks')
            .then(response => response.json())
            .then(data => {
                setframeworks(data.frameworks);
            })
            .catch(error => console.error('Erro ao carregar frameworks:', error));
    }, []);
    return (
        <ScrollView contentContainerStyle={{ display: 'flex', padding: 10 }}>
            {frameworks.map(item => (
                <View key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image style={{ width: 100, height: 100 }}
                                source={require('../assets/images/frameworks/django.webp')}
                            />
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text>{item.description} </Text>
                        </View>
                    </View>
                    
                    <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />
                
                </View>
            ))}
        </ScrollView >
    )
}

