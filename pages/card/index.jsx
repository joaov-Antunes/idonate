import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';

export function Card() {
    let [checked, setChecked] = useState('unchecked');

    return (
        <View style = {styles.container}>
            <View style = {styles.radioForm}>
                <RadioButton
                    value="crédito"
                    label="Crédito"
                    status={checked === 'crédito' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('crédito')}
                />
                <Text style = {styles.label}>Crédito</Text>

                <RadioButton
                    value="débito"
                    label="Débito"
                    status={checked === 'débito' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('débito')}
                />
                <Text style = {styles.label}>Débito</Text>
            </View>
            <View style = {styles.inputContainer}>
                <Text style = {styles.inputLabel}>NÚMERO DO CARTÃO</Text>
                <TextInput style = {styles.input}/>
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.inputLabel}>NOME DO TITULAR</Text>
                <TextInput style = {styles.input}/>
            </View>
            
            <View style = {styles.inputContainer}>
                <Text style = {styles.inputLabel}>EXPIRA EM</Text>
                <TextInput style = {styles.input} placeholder = {'MM/AA'}/>
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.inputLabel}>CVV</Text>
                <TextInput style = {styles.input}/>
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.inputLabel}>CPF DO TITULAR</Text>
                <TextInput style = {styles.input}/>
            </View>

            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>FINALIZAR PAGAMENTO</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        container: '#FCFEFF',
        flexDirection: 'column',
        alignItems: 'center'
    },
    radioForm: {
        flexDirection: 'row',
        marginTop: 115,
        marginBottom: 33
    },
    label: {
        textAlignVertical: 'center'
    },
    inputContainer: {
        marginTop: 22,
        width: 190
    },
    input: {
        height: 38,
        width: 190,
        borderWidth: 2,
        paddingLeft: 10
    },
    inputLabel: {
        fontSize: 14
    },
    button: {
        backgroundColor: '#0D6380',
        width: 190,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 78,
        marginTop: 35
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    }
})