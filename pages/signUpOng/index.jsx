import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignUpOng ({ navigation }) {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [ongName, setOngName] = useState(null);
  const [display, setDisplay] = useState('none');

  async function storeOngData() {
    const storeValue = {
      name,
      cpf,
      email,
      ongName,
    }
    try {
      await AsyncStorage.setItem('ongData', JSON.stringify(storeValue));
    } catch (error) {
      console.log(error);
    }
  };

  if(display == 'flex') {
    setTimeout(() => {
      setDisplay('none');
    }, 5000);
  };

  return (
      <View style = {styles.container}>
        <Image source={require('../../assets/logo.png')}></Image>
        <Text style = {{color: 'red', display: display}}>Preenca os campos antes de prosseguir</Text>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>NOME COMPLETO</Text>
        <TextInput style = {styles.input} onChangeText = {text => setName(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CPF</Text>
        <TextInput style = {styles.input} onChangeText = {text => setCpf(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setEmail(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>NOME DA ONG</Text>
        <TextInput style = {styles.input} onChangeText = {text => setOngName(text)}/>

        <TouchableOpacity style = {styles.login} onPress = {() => {if(name == null || cpf == null || email == null || ongName == null) {
          setDisplay('flex');
        } else {
          storeOngData();
          navigation.navigate('signUpContinuation');
        }}}>
          <Text style = {{color: '#FFF', fontSize: 24}}>PRÓXIMO</Text>
        </TouchableOpacity>

        <Text></Text>

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
    marginTop: 18,
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