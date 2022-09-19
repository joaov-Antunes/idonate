import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import {PlayfairDisplay_400Regular, 
        PlayfairDisplay_700Bold, 
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_400Regular_Italic} 
from '@expo-google-fonts/playfair-display';
import {useFonts} from 'expo-font';
import { Footer } from "../templates/footer";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";

export function NewPost(props) {
    const [image, setImage] = useState(null);
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri)
        }
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
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
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