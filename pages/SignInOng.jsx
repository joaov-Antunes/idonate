import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


export function RegisterOng() {
  return (
    
    <View style={styles.container}>
      
      <View>
        <Image
          style={{
            resizeMode: "center",
            height: 50,
            marginTop:20,
          }}
          source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dc33a8affacd11add0235cc853cddab1',
        }}
        />
        <Text style={{fontSize: 17,paddingRight:130,paddingTop:20}}>Nome do Completo</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:250}}>CPF</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:240}}>Email</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:170}}>Nome da ONG</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:234}}>Senha</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:155}}>Confrimar Senha</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      
      <Text style={{fontSize: 17,paddingRight:237}}>CNDT</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 17,paddingRight:230}}>Celular</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
      </View>

    <View style={styles.container}>
  
    </View>
    
    <View style={styles.container}>
      <View style={styles.countContainer}>
      </View>
      <TouchableOpacity
        style={styles.buttonBlue}>
        <Text style={styles.textButtonBlue}>ENVIAR</Text>
      </TouchableOpacity>
      <View style={{margin:20}}></View>
    </View>
    </View>
    

  );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    paddingTop:10,
    
  },
  buttonBlue: {
    alignItems: "center",
    backgroundColor: "#0d6380",
    padding: 10,
    width:280,
    height:50,
    borderRadius:10,
  },

  textButtonBlue:{
    color: 'white',
    fontSize: 20,
  },
  input: {
    height: 40,
    width:280,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth:0,
    margin: 5,
    borderWidth: 3,
    paddingLeft:10,
  },
  
});