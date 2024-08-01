import { Text, ScrollView, View, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router"; // Importar Link
import list from './products.json';
import imageMappings from './imageMappings';

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Nossos cafés e Linguagens
            </Text>

            {list.listProduct.map((item) => (
                <View key={item.id} style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/coffeesingle/[id]",
                                params: { id: item.id }
                            }}
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Acessar</Text>
                        </Link>

                    </View>

                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#fff',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#260F0D',
    },
    itemButton: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden', // Garante que o conteúdo não ultrapasse as bordas
    },
    itemContainer: {
        backgroundColor: '#F2D8C2',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
        //alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemContainerDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemLink: {
        backgroundColor: '#260F0D', // Cor de fundo do botão
        borderRadius: 8, // Bordas arredondadas
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 20, // Espaçamento horizontal do botão
        marginTop: 10, // Espaço entre o item e o botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center', // Alinha o texto verticalmente no botão
    },
    linkText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'left',
    },
});
