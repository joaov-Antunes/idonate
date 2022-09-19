import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";

export function SignUpOngPartTwo() {
    return(
        <View style = {styles.container}>
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>SENHA</Text>
            <TextInput style = {styles.input}/>
        
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CONFIRMAR SENHA</Text>
            <TextInput style = {styles.input}/>
            
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CNDT</Text>
            <TextInput style = {styles.input}/>
            
            <Text style = {{alignSelf: 'flex-start', marginLeft: 40, marginTop: 18, marginBottom: -20}}>CELULAR</Text>
            <TextInput style = {styles.input}/>

            <TouchableOpacity style = {styles.login}>
                <Text style = {{color: '#FFF', fontSize: 24}}>ENVIAR</Text>
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
    }
})