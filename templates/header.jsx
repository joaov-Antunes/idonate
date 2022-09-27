import { Alert, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';

export function Header({navigation}) {
  let [modalVisible, setModalVisible] = useState(false);
  let [logged, setLogged] = useState(false)
  
  function openProfileScreen() {
    navigation.navigate('profile')
  }

  function openSignUp() {
    navigation.navigate('signUp')
  }

  return (
    <View style = {styles.header}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style = {styles.modalContainer}>
          <View>
            <View>
              <Image source={require('../assets/logo.png')}/>
              <View style = {styles.modalHeader}>
                
              </View>
              <Text style={styles.modalText}>Querido usuário, nosso app não tem fins lucrativos, e por isso, sua ajuda seria bem vinda para ajudar a manter nosso app! Caso você goste do nosso app, nós da equipe Idonate pedimos sua ajuda com uma pequena doação para arcarmos com os custos do nosso app.</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    {logged == false ?(
      <TouchableOpacity onPress={openSignUp}>
        <Image source={require('../assets/user.png')}></Image>
      </TouchableOpacity>
    ): 
      <TouchableOpacity onPress={openProfileScreen}>
        <Image source={require('../assets/user.png')}></Image>
      </TouchableOpacity>
    }
        
      <Text style = {styles.title}>Idonate</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="settings-outline" size={30} color="black" />
      </TouchableOpacity>
        
      </View>
  )
}