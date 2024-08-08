import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { API_URL } from './config';


export default function About() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch('http://10.66.82.55:4000/about')
        fetch(API_URL + '/about')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Sem resposta de Conexão');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }
    return (

        <ScrollView contentContainerStyle={styles.container}>
            {data && (
                <>
                    <Text style={styles.titleThree}>{data.name}</Text>
                    <Text style={styles.descriptionThree}>{data.Description}</Text>
                </>
            )}
        </ScrollView>


    );
}
