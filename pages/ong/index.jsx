import { View,TouchableOpacity, Image, Text, StyleSheet } from'react-native';

export function Ong() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Qual instituição você gostaria de ajudar?</Text>
            <View style = {styles.profiles}>
                <TouchableOpacity style = {styles.profileContainer}>
                    <Image source={require('../../assets/user.png')} style = {{left: 10}}/>
                    <Text style = {styles.ongName}>Nome da ong</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.profileContainer}>
                    <Image source={require('../../assets/user.png')} style = {{left: 10}}/>
                    <Text style = {styles.ongName}>Nome da ong</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.profileContainer}>
                    <Image source={require('../../assets/user.png')} style = {{left: 10}}/>
                    <Text style = {styles.ongName}>Nome da ong</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.profileContainer}>
                    <Image source={require('../../assets/user.png')} style = {{left: 10}}/>
                    <Text style = {styles.ongName}>Nome da ong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: '#FCFEFF',
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 32
    },
    profiles: {
        marginTop: 84
    },
    profileContainer: {
        height: 52,
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    ongName: {
        marginLeft: 15,
        fontSize: 18
    },
    message: {
        fontSize: 24,
        textAlign: 'center',
    }
});