import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";

export function History() {
    let [clean, setClean] = useState(true);
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Perfis acessados recentemente</Text>
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
            
            <View style = {{flex: 0.85, justifyContent:  'center'}}>
                <Text style = {styles.message}>Seu histórico acaba por aqui</Text>
            </View>
            
            <TouchableOpacity style = {styles.clean}>
                <Text style = {{fontSize: 18}}>Limpar histórico</Text>
            </TouchableOpacity>
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
    },
    clean: {
        position: 'absolute',
        bottom: 0,
        height: 56,
        backgroundColor: '#FFFF00',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});