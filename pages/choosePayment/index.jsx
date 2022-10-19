import { View, TouchableOpacity, TextInput, Text, Image, StyleSheet } from "react-native";
import { Footer } from "../../templates/footer";

export function Payment({ navigation }) {    
    
    function selectPix() {
        navigation.navigate('pix')
    }

    function selectCard() {
        navigation.navigate('card')
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Qual valor você gostaria de doar para essa instituição?</Text>
            <TextInput style = {styles.input} placeholder = {'R$'} keyboardType = {'number-pad'}/>


            <View style = {{flexDirection: 'row', justifyContent: 'center', marginLeft: -22}}>
                <TouchableOpacity style = {styles.button} onPress = {selectCard}>
                    <Text style = {styles.buttonText}>Cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {selectPix}>
                    <Text style = {styles.buttonText}>PIX</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/card.png')} style = {styles.image}/>
            <Footer navigation = {navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        height: 38,
        width: 190,
        borderWidth: 2,
        paddingLeft: 10,
        marginTop: 32,
        alignSelf: 'center'
    },
    button: {
        width: 130,
        height: 56,
        backgroundColor: '#0D6380',
        borderRadius: 10,
        marginLeft: 22,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    image: {
        marginTop: 32,
        alignSelf: 'center'
    }
})