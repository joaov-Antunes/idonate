import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import {PlayfairDisplay_400Regular, 
        PlayfairDisplay_700Bold, 
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_400Regular_Italic}
from '@expo-google-fonts/playfair-display';
import {useFonts} from 'expo-font';
import { Footer } from "../../templates/footer";
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function NewPost(props) {
    const [image, setImage] = useState(null);
    const [display, setDisplay] = useState('none');
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    async function storeImageUrl() {
        await AsyncStorage.setItem('ImageUrl', image);
    }

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

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.title}>Novo post</Text>
            </View>

            <View style = {styles.imageContainer}>
                <TouchableOpacity onPress={pickImage} style = {styles.selectImage}>
                    <Text style = {styles.subtitle}>Selecionar imagem da galeria</Text>
                </TouchableOpacity>
                <Text style = {{color: 'red', display: display}}>Selecione a imagem antes de prosseguir.</Text>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

            <TouchableOpacity onPress={() => image == null ? setDisplay('flex') : props.navigation.navigate('finish')} style = {styles.selectImage}>
                    <Text style = {styles.subtitle} onPress = {storeImageUrl}>Continuar</Text>
                </TouchableOpacity>
            <Footer navigation = {props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFEFF'
    },
    header: {
        flexDirection: 'column',
        top: 32
    },
    title: {
        fontFamily: 'PlayfairDisplay_400Regular_Italic',
        fontSize: 24,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
        fontWeight: 'bold',
        color: '#FFF'
    },
    imageContainer: {
        alignSelf: 'center'
    },
    selectImage: {
        width: 316,
        backgroundColor: '#0D6380',
        marginTop: 64,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})