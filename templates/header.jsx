import { Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header({navigation}) {
  let [modalVisible, setModalVisible] = useState(false);
  let [logged, setLogged] = useState(false);
  let [user, setUser] = useState(null);

  async function setName() {
    let response = await AsyncStorage.getItem('userData');
    let json = JSON.parse(response);
    try {
      setUser(json.name);
      if(user == null) {
        setLogged(false);
      } else {
        setLogged(true);
      }
    } catch (error) {
      //console.log(error);
    };
  };

  async function getUserData() {
    let response = await AsyncStorage.getItem('userData');
    let json = JSON.parse(response);
  };

  setName();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style = {styles.header}>

      <TouchableOpacity onPress={() => logged == false ? navigation.navigate('signUp') : navigation.navigate('profile')}>
        <Image source={require('../assets/user.png')}></Image>
      </TouchableOpacity>
        
      <Text style = {styles.title}>Idonate</Text>
      <TouchableOpacity onPress={() => navigation.navigate('config')}>
        <Ionicons name="settings-outline" size={30} color="black" />
      </TouchableOpacity>
        
    </View>
  )
}