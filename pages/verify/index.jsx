import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export function VerifyLogin() {

  async function verify() {
    let response = await fetch('http://172.16.0.66:3000/verify', {
      
    })
  }

  return (
    <View style = {styles.container}>
      <Image source={require('../../assets/logo.png')} style = {{marginBottom: 22}}></Image>
      <Text style = {{fontSize: 10}}>FOI ENVIADO UM CÓDIGO PARA O SEU EMAIL</Text>
      <View style = {{flexDirection: 'row', justifyContent: 'center', marginLeft: -8, marginTop: 32}}>
        <TextInput 
        style = {styles.codeSquare}
        maxLength = {1}
        keyboardType = {'number-pad'}
        >
        </TextInput>
        <TextInput 
        style = {styles.codeSquare}
        maxLength = {1}
        keyboardType = {'number-pad'}
        >
        </TextInput>
        <TextInput 
        style = {styles.codeSquare}
        maxLength = {1}
        keyboardType = {'number-pad'}
        >
        </TextInput>
        <TextInput 
        style = {styles.codeSquare}
        maxLength = {1}
        keyboardType = {'number-pad'}
        >
        </TextInput>
      </View>
      <TouchableOpacity style = {styles.login} onPress = {verify}>
        <Text style = {{fontSize: 24, color: '#fff'}}>Enviar</Text>
      </TouchableOpacity>

        <TouchableOpacity style = {styles.resend}>
        <Text style = {{color: '#000AFF'}}>REENVIAR CÓDIGO</Text>
      </TouchableOpacity>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FCFEFF'
  },
  codeSquare: {
    width: 50,
    height: 50, 
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginLeft: 8,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    fontSize: 24,
    textAlign: 'center',
  },
  login: {
    backgroundColor: '#0D6380',
    borderRadius: 10,
    width: 224,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginTop: 46
  },
  resend: {
    top: 46
  }
});