import { View, TouchableOpacity, Image, Text, Modal } from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/styles'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Footer({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  function openHome() {
    navigation.navigate('home')
  }

  function openSearch() {
    navigation.navigate('search')
  }

  function openNewPost() {
    navigation.navigate('newpost')
  }

  function openPayment() {
    navigation.navigate('ong')
  }

  function openHistory() {
    navigation.navigate('history')
  }

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

  return (
      <View style = {styles.footer}>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Efetue seu login antes de continuar navegando pelo feed.</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    props.navigation.navigate('signUp');
                  }}
                >
                  <Text style={styles.hideText}>Login</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={openHome}>
          <Ionicons style = {styles.footerIcon} name="home-outline" size={35} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={openSearch}>
          <Ionicons style = {styles.footerIcon} name="search-outline" size={35} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('choose')} style = {{flexDirection: 'column'}}>
          <Image style = {styles.footerLogo} source={require('../assets/logo.png')}></Image>
        </TouchableOpacity>
        <Text style = {styles.donateText}>Doar</Text>
        
        
        <TouchableOpacity onPress={openNewPost}>
          <Feather style = {styles.footerIcon} name="plus-square" size={35} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress = {openHistory}>
          <MaterialIcons style = {styles.footerIcon} name="history" size={35} color="black" />
        </TouchableOpacity>
      </View>

  )
}

