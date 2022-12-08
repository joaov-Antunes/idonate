import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Footer } from "../../templates/footer";
import { useState } from "react";

export function Search(props) {
    const [user, setUser] = useState(null);
    const [text, setText] = useState('')

    async function search() {
        let response = await fetch('http:/192.168.0.190:3000/search', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                OngName: user,
            }
        });
        let json = await response.json();
        if(json == 'error') {
            setText('ONG não encontrada');
        } else {
            setText(json);
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TextInput
                onChangeText={text => {
                    search
                    setUser(text);
                }}
                placeholder= 'Buscar perfis e hashtags'
                style = {styles.input}
                />
                <Ionicons style = {styles.icon} name="search-outline" size={35} color="black" />
            </View>
            <Text>{text}</Text>
            <Footer navigation= {props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFEFF'
    },
    footer: {
        bottom: 0,
        height: 50,
        flexDirection: 'row',
        borderTopColor: '#000',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 31
    }, 
    footerIcon: {
        marginRight: 31
    }, 
    footerLogo: {
        marginBottom: 50,
        marginRight: 31
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        textAlignVertical:'center',
        left: -35
    },
    input: {
        height: 56,
        width: 316,
        borderBottomWidth: 1,
        alignSelf: 'center'
    }
})
