import { View, Button, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from "react";

export function Chat() {
    const [textPrevious, setTextPrevious] = useState('');
    const [message, setMessage] =  useState('')

    async function postMessage() {
        let response = await fetch('http:/192.168.0.190:3000/chat', {
            method: 'POST',
            headers: {
                Accept: 'application/jsom',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                Message: message
              })
        })
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../assets/user.png')} style = {styles.userImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="shield" size={30} color="black" style = {styles.shield}/>
                </TouchableOpacity>
            </View>
        

            {message == '' ? (
                <View>
                    
                </View>
            ): 
                <View style = {styles.messageBox}>
                    <Text style = {styles.message}>{message}</Text>
                </View>
            }
            
            <View style = {styles.inputBox}>
                <TextInput onChangeText={text => setTextPrevious(text)} style = {styles.input}/>
                <TouchableOpacity onPress={() => setMessage(textPrevious)}>
                    <Feather name="send" size={24} color="black" style = {styles.enter}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFEFF'
    },
    header: {
        height: 74,
        backgroundColor: '#4285f4',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userImage: {
        left: 24
    },
    shield: {
        marginRight: 24
    },
    message: {
        fontSize: 14,
        color: '#fff'
    },
    messageBox: {
        height: 44,
        maxWidth: 220,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 18,
        marginLeft: 24,
        backgroundColor: '#4285f4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: '90%',
    },
    inputBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        left: 30
    },
    enter: {
        marginLeft: -25
    }
})