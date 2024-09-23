import { View, Text, ScrollView, Image } from "react-native"

export default function Frameworks() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1,  }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pizza Napolitana</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150 }}
                            source={require('../assets/images/pizza/pizza-1.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                    
                </View>
            </View>

            <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pizza Napolitana</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150 }}
                            source={require('../assets/images/pizza/pizza-1.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                </View>
            </View>

            <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />


            <View style={{ display: 'flex'}}>
                <View>
                    <Text> Pizza Napolitana </Text>
                </View>
                <View>
                    <View> 
                        <Text> Imagem da Pizza </Text>
                    </View>
                    <View>
                        <Text> Texto da Pizza </Text>
                    </View>
                </View>
            </View>


           
        </ScrollView >
    )
}

