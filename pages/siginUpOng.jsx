import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function SignUpOng({ navigation }) {
  let isLogged = true

  function openNextPage() {
    navigation.navigate('signUpContinuation')
  }
  return (
      <View style = {styles.container}>
        <Image source={require('../assets/logo.png')}></Image>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>NOME COMPLETO</Text>
        <TextInput style = {styles.input}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CPF</Text>
        <TextInput style = {styles.input}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>EMAIL</Text>
        <TextInput style = {styles.input}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>NOME DA ONG</Text>
        <TextInput style = {styles.input}/>

        <TouchableOpacity style = {styles.login} onPress = {openNextPage}>
          <Text style = {{color: '#FFF', fontSize: 24}}>PRÓXIMO</Text>
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