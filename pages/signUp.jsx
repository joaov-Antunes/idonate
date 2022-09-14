import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export function SignUp({ navigation }) {

        function openChooseSignUp() {
            navigation.navigate('chooseSignUp')
        }

        function openLogin() {
            navigation.navigate('login')
        }

        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')}></Image>
                <Text style = {styles.title}>Idonate</Text>

                <View style = {styles.component}>
                    <TouchableOpacity style = {styles.donate} onPress = {openChooseSignUp}>
                        <Text style = {{fontSize: 24}}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {styles.component}>
                    <TouchableOpacity style = {styles.ong} onPress = {openLogin}>
                        <Text style = {{color: '#fff', fontSize: 24}}>Login</Text>
                    </TouchableOpacity>
                </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFEFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#0D6380',
        marginTop: 17
    },
    donate: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        width: 316,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ong: {
        backgroundColor: '#0D6380',
        borderRadius: 10,
        width: 316,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    component: {
        marginTop: 17
    }
})