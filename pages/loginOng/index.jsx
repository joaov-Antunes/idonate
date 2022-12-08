import { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';

export function LoginOng({ navigation }) {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [display, setDisplay] = useState('none');

  async function login() {
    let response = await fetch('http:/192.168.0.190:3000/loginong', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify ({
        email: email,
        password: password
      })
    });
    let json = await response.json();
    let token = json.token
    console.log(json);
    if(json == 'error') {
      setDisplay('flex');
      setTimeout(() => setDisplay('none'), 5000)
    } else {
      navigation.navigate('profile');
      try {
        await AsyncStorage.setItem('ongData', JSON.stringify({json, token}));
        const data = await AsyncStorage.getItem('ongData');
        console.log(data);
      } catch(error) {
        console.error(error);
      }
    }
  }

  return (
      <View style = {styles.container}>
        <Image source={require('../../assets/logo.png')}></Image>
        <Text style = {{display: display, color: 'red'}}>Senha ou usuário incorretos.</Text>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setemail(text)}/>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setPassword(text)} secureTextEntry = {true}/>
        <TouchableOpacity style = {styles.login} onPress = {login}>
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
  }
})