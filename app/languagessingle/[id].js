import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
import { API_URL } from '../config';

export default function LanguageSingle() {
    const { id } = useLocalSearchParams(); // Obtém o id da URL
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        fetch(API_URL + '/select-language/'+id)
            .then(response => response.json())
            .then(data => {
                setLanguage(data.language);
            })
            .catch(error => console.error('Erro ao carregar language:', error));
    }, [id]);

    if (!language) {
        return <Text>Carregando...</Text>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{language.name}</Text>
            <Text>{language.description}</Text>
        </ScrollView>
    )
}
