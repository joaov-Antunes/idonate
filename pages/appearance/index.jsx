import {View, TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Appearance() {
    const [theme, setTheme] = useState('light');
    const [bgColor, setBgColor] = useState('#fff');

    let colorScheme = useColorScheme();
    let container;
    let text;
    let color;
    let item;
    
    if (theme === 'dark') {
        container = styles.containerDark;
        text = styles.darkText;
        color = 'white'
        item = styles.itemDark;
    } else {
        container = styles.container;
        text = styles.buttonText;
        color = 'black',
        item = styles.item
    }

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
        <View style  = {container}>
                <TouchableOpacity style = {item} onPress = {() => 
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
                        <Feather name="sun" size={25} color = {color} />
                    ): 
                        <Feather name="moon" size={25} color = {color} />
                    }
                    <Text style = {text}>Tema</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {item}>
                    <Ionicons name="color-palette-outline" size={24} color = {color} />
                    <Text style = {text}>Daltonismo</Text>
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
    darkText: {
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10,
        color: '#fff'
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
    itemDark: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})