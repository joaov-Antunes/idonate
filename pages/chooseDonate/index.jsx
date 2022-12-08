import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export function ChooseDonation({navigation}) {
    return (
        <View style = {styles.container}>
            <Image source={require('../../assets/logo.png')}/>
            <Text style = {styles.idonate}>Idonate</Text>
            <Text style = {styles.text}>O que deseja doar?</Text>
            <View style = {{flexDirection: "row", justifyContent: "space-evenly", width: '100%', marginTop: 68}}>
                <TouchableOpacity style = {styles.buttonYellow} onPress = {() => navigation.navigate('ong')}>
                    <Text style = {{fontSize: 24, textAlign: "center"}}>ITEM</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonBlue} onPress = {() => navigation.navigate('ong')}>
                    <Text style = {{fontSize: 24, textAlign: "center", color: '#fff'}}>Valor</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-evenly", width: '100%', marginTop: 68}}>
                <Image source={require('../../assets/item.png')}/>
                <Image source={require('../../assets/valor.png')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonYellow: {
        height: 69,
        width: 153,
        borderRadius: 10,
        backgroundColor: '#FFED00',
        justifyContent: "center"
    },
    buttonBlue: {
        height: 69,
        width: 153,
        borderRadius: 10,
        backgroundColor: '#0D6380',
        justifyContent: "center"
    },
    idonate: {
        color: '#0099CC',
        fontSize: 24,
        marginTop: 18
    },
    text: {
        fontSize: 24,
        marginTop: 68
    }
})