import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function selectPayment({ navigation }) {
    function selectPix() {
        navigation.navigate('payment')
    }

    return(
        <View style = {styles.container}>
            <View style = {{flexDirection: 'row', justifyContent: 'center', marginLeft: -22}}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {selectPix}>
                    <Text style = {styles.buttonText}>PIX</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center'
    },
    button: {
        width: 130,
        height: 56,
        backgroundColor: '#0D6380',
        borderRadius: 10,
        marginLeft: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})