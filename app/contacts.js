// npm install expo-contacts
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts'; // Importa a API de contatos do Expo

export default function Contatos() {
    const [contacts, setContacts] = useState([]); // Estado para armazenar os contatos

    useEffect(() => {
        // Função para solicitar permissão e carregar os contatos
        const loadContacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync(); // Solicita permissão
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                }); // Carrega os contatos
                if (data.length > 0) {
                    setContacts(data); // Atualiza o estado com os contatos
                }
            } else {
                console.log('Permissão de acesso aos contatos negada');
            }
        };

        loadContacts(); // Carrega os contatos ao montar o componente
    }, []);

    // Função para renderizar cada item da lista de contatos
    const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
            {/* Valida se o nome existe antes de renderizar */}
            <Text style={styles.contactName}>{item.name ? item.name : 'Nome não disponível'}</Text>
            {/* Valida se o número de telefone existe antes de renderizar */}
            {item.phoneNumbers && item.phoneNumbers.length > 0 ? (
                <Text style={styles.contactPhone}>{item.phoneNumbers[0].number}</Text>
            ) : (
                <Text style={styles.contactPhone}>Telefone não disponível</Text>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.contactCount}>Total de contatos: {contacts.length}</Text>
            <FlatList
                data={contacts} // Dados da lista
                keyExtractor={item => item.id} // Chave única para cada item
                renderItem={renderItem} // Função para renderizar cada item
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    contactCount: {
        fontSize: 16,
        marginBottom: 10,
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactName: {
        fontSize: 18,
    },
    contactPhone: {
        fontSize: 16,
        color: '#555',
    },
});
