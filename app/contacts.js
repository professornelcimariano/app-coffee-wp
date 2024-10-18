// npm install expo-contacts
// O componente Linking do React Native é utilizado para interagir com links externos e URLs. Ele permite abrir URLs no navegador, enviar e-mails, fazer chamadas telefônicas
/**
 * Contacts.Fields.Name: Nome do contato.
Contacts.Fields.PhoneNumbers: Números de telefone do contato.
Contacts.Fields.Emails: Endereços de e-mail do contato.
Contacts.Fields.Addresses: Endereços físicos do contato.
Contacts.Fields.Birthday: Data de aniversário do contato.
Contacts.Fields.Note: Notas associadas ao contato.
 */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native';
import * as Contacts from 'expo-contacts'; // expo-contacts: Módulo do expo que oferece uma API que permite ao seu aplicativo acessar, gerenciar e manipular os contatos do celular

export default function Contatos() {
    const [contacts, setContacts] = useState([]); // Estado para armazenar os contatos
    const [searchText, setSearchText] = useState(''); // Estado para armazenar o texto de busca

    useEffect(() => {
        // Função para solicitar permissão e carregar os contatos
        const loadContacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync(); // Contacts.requestPermissionsAsync() é uma função do Expo usada para solicitar permissão ao usuário para acessar os contatos armazenados no dispositivo.
            if (status === 'granted') { // 'granted': Quando o usuário permite o acesso. | 'denied': Quando o usuário nega o acesso.
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
    }, []); // array de dependências: array vazio, isso significa que o efeito (a função passada para o useEffect) será executado apenas uma vez após o componente ser montado

    // Função para renderizar cada item da lista de contatos
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.contactItem}
            onPress={() => {
                if (item.phoneNumbers && item.phoneNumbers.length > 0) {
                    Linking.openURL(`tel:${item.phoneNumbers[0].number}`);
                } else {
                    alert('Telefone não disponível');
                }
            }}
        >
            {/* Valida se o nome existe antes de renderizar */}
            <Text style={styles.contactName}>{item.name ? item.name : 'Nome não disponível'}</Text>
            {/* Valida se o número de telefone existe antes de renderizar */}
            {item.phoneNumbers && item.phoneNumbers.length > 0 ? (
                <Text style={styles.contactPhone}>{item.phoneNumbers[0].number}</Text>
            ) : (
                <Text style={styles.contactPhone}>Telefone não disponível</Text>
            )}
        </TouchableOpacity>
    );

    // Filtra os contatos com base no texto de busca
    const filteredContacts = contacts.filter(contact => {
        const contactName = contact.name ? contact.name.toLowerCase() : '';
        return contactName.includes(searchText.toLowerCase());
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar contato"
                value={searchText}
                onChangeText={setSearchText}
            />
            <Text style={styles.contactCount}>Total de contatos: {filteredContacts.length}</Text>
            <FlatList
                data={filteredContacts} // Dados da lista filtrada
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
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
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
