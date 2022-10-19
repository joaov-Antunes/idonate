import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { useState } from "react";

export function SignUpUser({ navigation }) {
    const [name, setName] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [username, setUsername] = useState(null);
    const [cellphone, setCellphone] = useState(null);
    const [display, setDisplay] = useState('none');
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState('Preencha os campos vazios antes de prosseguir.')

    async function sendForm() {
      if(password == null || username == null || cellphone == null) {
        setMessage('Preencha os campos vazios antes de prosseguir.')
        setDisplay('flex');
      } else if(password != confirmPassword) {
        setMessage('Senhas não coincidentes!');
      } else {
        let response = await fetch('http:/192.168.0.190:3000/register', {
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
        setDisplay('flex');
        setTimeout(() => {
          setDisplay('none');
        }, 10000);
      } else {
        setModalVisible(true);
      }
      }
    }
    
    return (
      
      <View style = {styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Cadastro efetuado com sucesso!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.navigate('home')}
            >
              <Text style={styles.hideText}>Ok!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

        <Image source={require('../../assets/logo.png')}></Image>

        <Text style = {{display: display, color: 'red', fontSize: 14, margin: 10}}>{message}</Text>
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20 }}>NOME COMPLETO</Text>
        <TextInput style = {styles.input} onChangeText = {text => setName(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CPF</Text>
        <TextInput style = {styles.input} onChangeText = {text => setCpf(text)} keyboardType = {'number-pad'}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>EMAIL</Text>
        <TextInput style = {styles.input} onChangeText = {text => setEmail(text)}/>
        
        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setPassword(text)}/>

        <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CONFIRMAR SENHA</Text>
        <TextInput style = {styles.input} onChangeText = {text => setConfirmPassword(text)}/>
        
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#0D6380',
    width: 180,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 18
  },
  hideText: {
    fontSize: 18,
    color: '#fff'
  }
})