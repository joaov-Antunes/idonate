import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export function LoginUser({ navigation }) {
  function openProfile() {
    navigation.navigate('profile')
  }

  let isLogged = true
  return (
      <View style = {styles.container}>
        <Image source={require('../assets/logo.png')}></Image>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>EMAIL</Text>
        <TextInput style = {styles.input}/>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input}/>

        {isLogged ?(
          <TouchableOpacity style = {styles.login} onPress = {openProfile}>
            <Text style = {{color: '#FFF', fontSize: 24}}>LOGIN</Text>
          </TouchableOpacity>
        ):  
          <TouchableOpacity style = {styles.login}>
            <Text style = {{color: '#FFF', fontSize: 24}}>LOGIN</Text>
          </TouchableOpacity>
        }
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFEFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    width: 316,
    height: 56,
    marginTop: 18
  },
  login: {
    backgroundColor: '#0D6380',
    borderRadius: 10,
    width: 316,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  }
})