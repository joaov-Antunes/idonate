import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function FinishPost() {
    const [imageUrl, setImageUrl] = useState(null);

    async function getImageData() {
        const response = await AsyncStorage.getItem('ImageUrl');
        let json = JSON.stringify(response);
        try {
            setImageUrl(json);
            console.log(json)
        } catch (error) {
            console.log('Url não existente');
        }
    }

    // async function postImage() {
    //     const response = await fetch('http:/192.168.0.190:3000/finishpost', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             imageUrl: imageUrl,
    //         })
    //     });
    //     const json = await response.json()
    //     if(json == null) {
    //         console.log('Erro')
    //     } else {
    //         console.log('imagem salva com sucesso!')
    //     }
        
    // }

    useEffect(() => {
        getImageData();
        // postImage();
    },[])

    return (
      <View style = {styles.container}>
        <Image source={{uri: imageUrl}} style = {styles.Image}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Image: {
        width: 1920,
        height: 1080
    }
})