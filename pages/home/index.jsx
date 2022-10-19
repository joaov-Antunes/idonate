import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Button} from 'react-native';
import { Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import {PlayfairDisplay_400Regular, PlayfairDisplay_700Bold, PlayfairDisplay_600SemiBold} from '@expo-google-fonts/playfair-display';
import {useFonts} from 'expo-font';
import { Ionicons} from '@expo/vector-icons';
import styles from '../../styles/styles';
import { Footer, Header } from '../../templates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  async function getUserData() {
    let response = await AsyncStorage.getItem('userData');
    let json = JSON.parse(response);
    try {
      console.log(json);
      setUser(json.name);
    } catch (error) {
      console.log(error);
    }
    
  }

  async function verifyLogin() {
    if(user == null) {
      setTimeout(() => {
        setModalVisible(true);
      }, 15000)
    }
  }

  useEffect(() => {
    getUserData();
    verifyLogin();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold
  });

  if(!fontsLoaded) {
    return null
  }

  return (
    <View style = {styles.container}>
      <Header navigation = {props.navigation}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Efetue seu login antes de continuar navegando pelo Idonate.</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                props.navigation.navigate('signUp');
              }}
            >
              <Text style={styles.hideText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style = {styles.content}>
        <View style = {styles.card}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity>
              <Image style = {{width: 25, height: 25, margin: 8}} source={require('../../assets/user.png')}></Image>
            </TouchableOpacity>
            <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 10}}>Idonate</Text>
          </View>
              <Image style = {{width: 318}} source={require('../../assets/photo-feed.png')}></Image>
              <View style = {styles.cardContent}>
              <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#FFF', margin: 10}}>Nome da ONG:</Text>
                <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#000', margin: 10, marginLeft: -5}}>Legenda do post.</Text>
              </View>
              <View style = {styles.cardFooter}>
              <View style = {{flexDirection: 'row', left: 10}}>
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
              </View>
              <Ionicons style = {{right: 10}}name="share-social-outline" size={20} color="black" />
              </View>
            </View>

          <View style = {styles.card}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity>
              <Image style = {{width: 25, height: 25, margin: 8}} source={require('../../assets/user.png')}></Image>
            </TouchableOpacity>
            <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 10}}>Idonate</Text>
          </View>
              <Image style = {{width: 318}} source={require('../../assets/photo-feed.png')}></Image>
              <View style = {styles.cardContent}>

              <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#FFF', margin: 10}}>Nome da ONG:</Text>
                <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#000', margin: 10, marginLeft: -5}}>Legenda do post.</Text>
              </View>

              <View style = {styles.cardFooter}>

              <View style = {{flexDirection: 'row', left: 10}}>
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
              </View>

              <Ionicons style = {{right: 10}} name="share-social-outline" size={20} color="black" />
              </View>
            </View>

            <View style = {styles.card}>
              <View style = {styles.cardHeader}>
                <TouchableOpacity>
                  <Image style = {{width: 25, height: 25, margin: 8}} source={require('../../assets/user.png')}></Image>
                </TouchableOpacity>
                <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 10}}>Idonate</Text>
              </View>
              
              
              <Image style = {{width: 318}} source={require('../../assets/photo-feed.png')}></Image>
              <View style = {styles.cardContent}>

              <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#FFF', margin: 10}}>Nome da ONG:</Text>
                <Text style = {{fontFamily: 'Montserrat_400Regular', fontSize: 12, color: '#000', margin: 10, marginLeft: -5}}>Legenda do post.</Text>
              </View>

              <View style = {styles.cardFooter}>

              <View style = {{flexDirection: 'row', left: 10}}>
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
                <Ionicons name="star-outline" size={20} color="yellow" />
              </View>

              <Ionicons style = {{right: 10}}name="share-social-outline" size={20} color="black" />
              </View>
            </View>
        </View>
      </ScrollView>
      <Footer navigation = {props.navigation}/>
    </View>
  );
}