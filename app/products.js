import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import list from './products.json';
import imageMappings from './imageMappings';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Products() {
    return (
        <ScrollView>
            <View style={[styles.container, styles.backgroundPrimary]}>
                <Text style={styles.titleTwo}>
                    Qual café te acompanhará no Deploy? <Icon name="code" size={20} color="#fff" />
                </Text>
                {list.listProduct.map((item) => (                    
                    <View key={item.id} style={[styles.itemTwo, styles.backgroundSecond]}>
                        <View style={styles.itemTwoDetails}>
                            <Image source={imageMappings[item.image]} style={styles.imageTwo} />
                            <View style={styles.itemTwoText}>
                                <Text style={styles.itemTwotitleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.itemTwodescriptionProduct}>{item.description}</Text>
                            </View>
                        </View>

                        <Link
                            href={{
                                pathname: "/coffeesingle/[id]",
                                params: { id: item.id }
                            }}
                            style={[styles.button, styles.backgroundPrimary]} // Estilo do link para ser um botão
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
                ))
                }
            </View>
        </ScrollView >
    );
}


