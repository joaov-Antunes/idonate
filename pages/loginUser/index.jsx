import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import * as Facebook from 'expo-facebook';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LoginUser({ navigation }) {
  const [display, setDisplay] = useState('none')
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [login, setLogin] = useState(false);

  async function sendLogin() {
    let response = await fetch('http:/192.168.0.190:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user,
        password: password,
        username: username
      })
    });
    let json = await response.json();
    if(json == 'error') {
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none')
      }, 10000);
    } else {
      navigation.navigate('profile');
      setLogin(true);
      const userJsonValue = JSON.stringify(json);
      await AsyncStorage.setItem('userData', userJsonValue);
      let resData = await AsyncStorage.getItem('userData');
      console.log(JSON.parse(resData));
    }
  }

  return (
      <View style = {styles.container}>
        
        <Image source={require('../../assets/logo.png')}></Image>
        <Text style = {{display: display, color: 'red', fontSize: 18, margin: 20}}>Usuário ou senha inválidos.</Text>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setUser(text)}/>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setPassword(text)} secureTextEntry = {true}/>

        <TouchableOpacity style = {styles.login} onPress = {sendLogin}>
          <Text style = {{color: '#FFF', fontSize: 24}}>LOGIN</Text>
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