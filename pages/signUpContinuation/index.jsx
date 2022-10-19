import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function SignUpOngPartTwo({ navigation }) {
    const [name, setName] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [email, setEmail] = useState(null);
    const [ongName, setOngName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [cndt, setCndt] = useState(null);
    const [cellphone, setCellphone] = useState(null);
    const [display, setDisplay] = useState('none');
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState('Preenca os campos antes de prosseguir.')

    useEffect(() => {
        getOngData();
    }, []);

    async function getOngData() {
        try {
          const response = await AsyncStorage.getItem('ongData');
          const json = JSON.parse(response);
          setName(json.name);
          setCpf(json.cpf);
          setEmail(json.email);
          setOngName(json.ongName);
          console.log(json);
        } catch (error) {
          console.log(error);
        }
    }
    
    async function sendRegister() {
      if(password != confirmPassword) {
        setMessage('As senhas não coincidem!');
        setDisplay('flex');
      } else {
        let response = await fetch('http:/192.168.0.190:3000/registerong', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              ownerName: name,
              cpf: cpf,
              email: email,
              OngName: ongName,
              password: password,
              CNDT: cndt,
              cellphoneNumber: cellphone
          })
        });
        let json = await response.json();
        if (json == 'error') {
          setDisplay('flex');
        } else {
          setModalVisible(true);
        }
      }
      
    }

    return(
        <View style = {styles.container}>
            <Text style = {{color: 'red', display: display}}>{message}</Text>
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
            <TextInput style = {styles.input} onChangeText = {text => setPassword(text)} secureTextEntry = {true}/>
        
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CONFIRMAR SENHA</Text>
            <TextInput style = {styles.input} onChangeText = {text => setConfirmPassword(text)} secureTextEntry = {true}/>
            
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CNDT</Text>
            <TextInput style = {styles.input} onChangeText = {text => setCndt(text)}/>
            
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CELULAR</Text>
            <TextInput style = {styles.input} onChangeText = {text => setCellphone(text)}/>

            <TouchableOpacity style = {styles.login} onPress = {sendRegister}>
                <Text style = {{color: '#FFF', fontSize: 24}}>ENVIAR</Text>
            </TouchableOpacity>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFEFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: 316,
        height: 56,
        marginTop: 18
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