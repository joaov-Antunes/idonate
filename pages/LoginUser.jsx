import { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export function LoginUser({ navigation }) {
  let [display, setDisplay] = useState('none')
  let [user, setUser] = useState(null);
  let [password, setPassword] = useState(null)
  let [login, setLogin] = useState(null)

  async function sendLogin() {
    let response = await fetch('http://192.168.0.190:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user,
        password: password
      })
    });
    let json = await response.json();
    if(json == 'error') {
      setDisplay('flex'); 
    } else {
      navigation.navigate('profile');
    }
  }

  return (
      <View style = {styles.container}>
        <Image source={require('../assets/logo.png')}></Image>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setUser(text)}/>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setPassword(text)} secureTextEntry = {true}/>

        <TouchableOpacity style = {styles.login} onPress = {sendLogin}>
          <Text style = {{color: '#FFF', fontSize: 24}}>LOGIN</Text>
        </TouchableOpacity> 

        <Text style = {{fontSize: 18, margin: 32}}>OU</Text>

        <TouchableOpacity style = {styles.alternativeLogin}>
          <Image source={require('../assets/fb.png')}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.alternativeLogin}>
          <Image source={require('../assets/google.png')}/>
        </TouchableOpacity>

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
  },
  alternativeLogin: {
    marginTop: 5
  }
})