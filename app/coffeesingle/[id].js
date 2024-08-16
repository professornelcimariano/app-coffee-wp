import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import list from '../products.json'
import styles from '../styles';
import imageMappings from '../imageMappings';

export default function coffeeSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find(
        (item) => item.id == id)
    // console.log(data)

    return (
        <ScrollView contentContainerStyle={[styles.scrollview, styles.backgroundSecond]}>
            <Image
                style={[styles.imageTwoSingle]}
                source={imageMappings[data.image]}
            />
            <View style={[styles.container]}>
                {/* <View style={styles.containerSingle}> */}
                    <Text style={styles.itemTwotitleProduct}>
                        {data.title}
                    </Text>
                    <Text style={styles.description}> {data.description} </Text>

                {/* </View> */}
            </View>
        </ScrollView>
    )
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2D8C2',
    },
    // containerSingle: {
    //     padding: 20,
    // },

    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 10

    },
});