import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import {PlayfairDisplay_400Regular, 
        PlayfairDisplay_700Bold, 
        PlayfairDisplay_600SemiBold,
        PlayfairDisplay_400Regular_Italic} 
from '@expo-google-fonts/playfair-display';
import {useFonts} from 'expo-font';
import { Footer } from "../templates/footer";

export function NewPost(props) {
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
                <Text style = {styles.subtitle}>Selecione fotos da galeria</Text>
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
        textAlign: 'center',
        margin: 32
     }
})