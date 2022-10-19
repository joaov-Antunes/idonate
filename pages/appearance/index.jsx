import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Appearance() {
    const [theme, setTheme] = useState('light');
    const [bgColor, setBgColor] = useState('#fff');

    async function storeTheme() {
        try {
            await AsyncStorage.setItem('theme', bgColor);
        } catch (error) {
            console.log(error);
        }
    }

    async function setThemeAsync() {
        try {
            let response = await AsyncStorage.getItem('theme');
            let json = JSON.stringify(response);
            setBgColor(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }        
       
    }

    useEffect(() => {
        storeTheme();
        setThemeAsync();
    }, []);

    return (
        <View style  = {styles.container}>
                <TouchableOpacity style = {styles.item} onPress = {() => 
                            {if(theme == 'light') {
                                setTheme('dark')
                                setBgColor('#000')
                            } else {
                                setTheme('light')
                                setBgColor('#fff')
                            };
                        }
                    }>

                    {theme == 'light' ? (
                        <Feather name="sun" size={25} color="black" />
                    ): 
                        <Feather name="moon" size={25} color="black" />
                    }
                    <Text style = {styles.buttonText}>Tema</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.item}>
                    <Ionicons name="color-palette-outline" size={24} color="black" />
                    <Text style = {styles.buttonText}>Daltonismo</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10
    },
    item: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})