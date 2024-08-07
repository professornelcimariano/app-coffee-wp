import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import React, { useState, useEffect } from 'react';


export default function About() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/select-books')
            .then(response => response.json())
            .then(data => {
                setBooks(data.books);
            })
            .catch(error => console.error('Erro ao carregar Books:', error));
    }, []);
    return (
        <ScrollView>
            {books.map(json => (
                <p>{json.boo_id} - {json.boo_name} - {json.boo_description}</p>
            ))}
        </ScrollView>
    );
}
