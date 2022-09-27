import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import {PlayfairDisplay_400Regular, PlayfairDisplay_700Bold, PlayfairDisplay_600SemiBold, PlayfairDisplay_400Regular_Italic} from '@expo-google-fonts/playfair-display';
import {useFonts} from 'expo-font';
import { Footer } from '../templates/footer'
import { useState } from 'react';

export function Profile(props) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        PlayfairDisplay_400Regular,
        PlayfairDisplay_700Bold,
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_400Regular_Italic
    });
    
    if(!fontsLoaded) {
        return null
    }
 
    function openNewPost() {
        props.navigation.navigate('newpost')
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>

            </View>
            <Text style = {styles.title}>ONG name</Text>
            <View style = {{flexDirection: 'row'}}>
            <View style = {styles.topContent}>
                <View style = {{flexDirection: 'row'}}>
                    <Image source={require('../assets/user-big.png')} style = {{marginLeft: 18}}></Image>
                    <View>
                        <Text style ={styles.info}>Publicações 10</Text>
                        <Text style ={styles.info}>Nota 5</Text>
                    </View>
                </View>

                <View style = {styles.topFooter}>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {{left: 17, textAlignVertical: 'center', fontSize: 18}}>Nome real</Text>
                        <TouchableOpacity style = {styles.follow}>
                            <Text style = {{color: '#0D6380', fontWeight: 'bold', fontSize: 18}}>Seguir</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', top: 17}}>
                        <Image source={require('../assets/location.png')} style = {{left: 17}}></Image>
                        <Text onPress={() => { 
                            Linking.openURL('https://goo.gl/maps/m5voU2cVVpyaZJUi7');
                            }}
                            style = {styles.adressLink}
                            >
                            Praça Miguel Ortega, 135 - Taboão da Serra.
                        </Text>
                    </View>
                </View>

                <ScrollView>
                    <View style = {styles.content}>

                        <View style = {styles.posts}>
                            <Image style = {styles.post} source={require('../assets/photo-feed-small.png')}></Image>
                            <Image style = {styles.post} source={require('../assets/idea.png')}></Image>
                            <Image style = {styles.post} source={require('../assets/elder.png')}></Image>
                            <Image style = {styles.post} source={require('../assets/donations.png')}></Image>
                        </View>
                        
                        <View style = {styles.blankArea}>
                            <Text style = {styles.newPost}>Adicione uma nova postagem</Text>
                            <TouchableOpacity style = {{marginTop: 10}} onPress = {openNewPost}>
                                <Image source={require('../assets/newpost.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </ScrollView>
                
            </View>
            </View>
            <Footer navigation = {props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFEFF',
        flex: 1,
    },
    title: {
        fontFamily: 'PlayfairDisplay_400Regular',
        fontSize: 24,
        margin: 18
    },
    info: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 18,
        left: 18
    },
    topFooter: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        top: 15,
    },
    follow: {
        borderWidth: 1,
        borderRadius: 10,
        width: 116,
        height: 33,
        alignItems: 'center',
        marginLeft: 180,
    },
    adressLink: {
        color: '#000AFF',
        left: 18,
        textAlignVertical: 'center'
    },
    content: {
        marginTop: 48,
    },
    posts: {
        flexDirection: 'row'
    },
    post: {
        width: 98,
        height: 98
    },
    newPost : {
        textAlign: 'center',
        fontFamily: 'PlayfairDisplay_400Regular_Italic',
        fontSize: 24
    },
    blankArea: {
        alignItems: 'center',
        marginTop: 124
    }
})