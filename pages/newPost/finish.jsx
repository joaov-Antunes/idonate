import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Ionicons} from '@expo/vector-icons';

export function FinishPost() {
    const [imageUrl, setImageUrl] = useState(null);
    const [caption, setCaption] = useState(null);

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

    async function postImage() {
        const response = await fetch('http:/192.168.0.190:3000/finishpost', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                ImageUrl: imageUrl,
                Caption: caption,
            }),
        });
        const json = await response.json()
        if(json == null) {
            console.log('Erro')
        } else {
            console.log('imagem salva com sucesso!')
        }
        
    }

    useEffect(() => {
        getImageData();
        // postImage();
    },[])

    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>Sua postagem aparecerá assim para os outros usuários</Text>
        <Text>{caption}</Text>
        <View style = {styles.card}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity>
              <Image style = {{width: 25, height: 25, margin: 8}} source={require('../../assets/user.png')}></Image>
            </TouchableOpacity>
            <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 10}}>Idonate</Text>
            </View>
            <Image source={require('../../assets/photo-feed.png')}/>
              <View style = {styles.cardContent}>
              <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#FFF', margin: 10}}>Nome da ONG:</Text>
                <TextInput placeholder='digite aqui sua legenda' underlineColorAndroid='none' onChangeText={text => setCaption(text)} style = {styles.caption}/>
              </View>
              <View style = {styles.cardFooter}>
              <View style = {{flexDirection: 'row', left: 10}}>
                <TouchableOpacity>
                  <Ionicons name="star-outline" size={20} color="yellow"/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Ionicons name="star-outline" size={20} color="yellow"/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons name="star-outline" size={20} color="yellow"/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons name="star-outline" size={20} color="yellow"/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons name="star-outline" size={20} color="yellow"/>
                </TouchableOpacity>
              </View>
              <Ionicons style = {{right: 10}}name="share-social-outline" size={20} color="black" />
              </View>
            </View>
            <TouchableOpacity style = {styles.finishButton} onPress = {postImage}>
                <Text style = {{fontSize: 24, color: '#fff'}}>FINALIZAR</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 35,
        textAlign: 'center',
        fontSize: 18
    },
    Image: {
        width: 1920,
        height: 1080
    },
    card: {
        height: 403,
        borderRadius: 10,
        width: 318,
        marginTop: 13,
    },
    cardHeader: {
        height: 32,
        backgroundColor: '#0D6380',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardContent: {
        height: 82,
        backgroundColor: '#0D6380',
        flexDirection: 'row'
    },
    cardFooter: {
        height: 32,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#0D6380',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    finishButton: {
        backgroundColor: '#0D6380',
        width: 316,
        height: 56,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64
    },
    caption: {
        borderBottomColor: 'transparent'
    }
})