import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ChooseSignUp({ navigation }) {

        function openSignUpUser() {
            navigation.navigate('signupUser')
        }

        function openSignUpOng() {
            navigation.navigate('signUpOng')
        }

        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')}></Image>
                <Text style = {styles.title}>Idonate</Text>

                <View style = {styles.component}>
                    <TouchableOpacity style = {styles.donate} onPress = {openSignUpUser}>
                        <Text style = {{fontSize: 24}}>Doador</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {styles.component}>
                    <TouchableOpacity style = {styles.ong} onPress = {openSignUpOng}>
                        <Text style = {{color: '#fff', fontSize: 24}}>ONG</Text>
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