import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Button} from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons'

export function Header({navigation}) {

  let isLogged = true

  function openLoginScreen() {
    navigation.navigate('login')
  }

  function openProfileScreen() {
    navigation.navigate('profile')
  }

  function openSignUp() {
    navigation.navigate('signUp')
  }

  return (
    <View style = {styles.header}>
    {isLogged ?(
      <TouchableOpacity onPress={openSignUp}>
        <Image source={require('../assets/user.png')}></Image>
      </TouchableOpacity>
    ): 
      <TouchableOpacity onPress={openProfileScreen}>
        <Image source={require('../assets/user.png')}></Image>
      </TouchableOpacity>
    }
        

        
        <Text style = {styles.title}>Idonate</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
        
      </View>
  )
}

