import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from 'react';
// import list from './products.json';
import imageMappings from './imageMappings';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { API_URL } from './config';

export default function Languages() {
    const [languages, setlanguages] = useState([]);

    useEffect(() => {
        fetch(API_URL + '/select-languages')
            .then(response => response.json())
            .then(data => {
                setlanguages(data.languages);
            })
            .catch(error => console.error('Erro ao carregar languages:', error));
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titleTwo}>
                <Icon name="code" size={20} color="#fff" />
            </Text>
            {languages.map(item => (
                <View key={item.id} style={styles.itemTwo}>
                    <View style={styles.itemTwoDetails}>
                        <View style={styles.itemTwoText}>
                            <Text style={styles.itemTwotitleProduct}>{item.id}. {item.name}</Text>
                            <Text style={styles.itemTwodescriptionProduct}>{item.description}</Text>
                        </View>
                    </View>

                    <Link
                        href={{
                            pathname: "/languagessingle/[id]",
                            params: { id: item.id }
                        }}
                        style={styles.itemTwoButton} // Estilo do link para ser um botão
                        asChild
                    >
                        <TouchableOpacity>
                            <Text style={styles.itemTwoButtonText}>
                                Acessar
                            </Text>
                            {/* <View style={styles.linkIcon}>
                                    <Icon name="chevron-right" size={20} color="#fff" />
                                </View> */}
                        </TouchableOpacity>
                    </Link>

                </View>
            ))}

        </ScrollView >
    );
}

