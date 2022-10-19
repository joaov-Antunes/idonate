import { View, StyleSheet,TouchableOpacity, Text, Image } from "react-native";

export function Pix() {
    return(
        <View style = {styles.container}>

        <Text style = {styles.title}>Escaneie para fazer o pagamento</Text>
        <Image source={require('../../assets/qr.png')} style = {{alignSelf: 'center', marginTop: 36 }}/>

        <Text style = {{marginTop: 50, textAlign: 'center', fontSize: 18}}>OU</Text>
        <Text style = {styles.subTitle}>Copie e cole no aplicativo do seu banco</Text>
        <View style = {styles.bottomPage}>
            <Text style = {styles.pixKey}>Chave pix:</Text>
            <TouchableOpacity style = {styles.pixKeyNumber}>
                <Text>11989289800</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
         alignItems: 'center'
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
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 54
    },
    bottomPage: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: 50
    },
    pixKey: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    pixKeyNumber: {
        borderColor: '#BDB9B9',
        borderWidth: 1,
        width: 190,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10
    }
})