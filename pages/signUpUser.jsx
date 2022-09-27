import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export function SignUpUser({ navigation }) {
    let [name, setName] = useState(null);
    let [cpf, setCpf] = useState(null);
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [username, setUsername] = useState(null);
    let [cellphone, setCellphone] = useState(null);
    let [display, setDisplay] = useState('none');
    let [error, setError] = useState(null);

    async function sendForm() {
      if(name == null || cpf == null || email == null || password == null || username == null || cellphone ==null) {
        setDisplay('flex');
      } else {
        let response = await fetch('http://172.16.0.76:3000/register', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              cpf: cpf,
              email: email,
              password: password,
              username: username,
              number: cellphone
          })
      });
      let json = await response.json()
      if(json == 'error') {
        setDisplay(flex);
        setTimeout(() => {
          setDisplay('none')
        }, 10000)
      } else {
        navigation.navigate('home')
        setDisplay('none')
      }
      }
    }
    
    return (
      <View style = {styles.container}>
        <Image source={require('../assets/logo.png')}></Image>

        <Text style = {{display: display, color: 'red', fontSize: 14, margin: 10}}>Preencha os campos vazios antes de prosseguir.</Text>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>NOME COMPLETO</Text>
        <TextInput style = {styles.input} onChangeText = {text => setName(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CPF</Text>
        <TextInput style = {styles.input} onChangeText = {text => setCpf(text)} keyboardType = {'number-pad'}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setEmail(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input}/>

        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CONFIRMAR SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setPassword(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>NOME DE USUÁRIO</Text>
        <TextInput style = {styles.input} onChangeText = {text => setUsername(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CELULAR</Text>
        <TextInput style = {styles.input} onChangeText = {text => setCellphone(text)} keyboardType = {'number-pad'}/>

        <TouchableOpacity style = {styles.login} onPress = {sendForm}>
          <Text style = {{color: '#FFF', fontSize: 24}}>enviar</Text>
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
    marginTop: 10
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