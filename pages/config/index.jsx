import { View, TouchableOpacity, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from '@expo/vector-icons'; 

export function Config({navigation}) {
    const [user, setUser] = useState(null);
    function MyComponent() {
        let colorScheme = useColorScheme();
      
        if (colorScheme === 'dark') {
          // render some dark thing
        } else {
          // render some light thing
        }
      }

    async function getUserData() {
        let response = await AsyncStorage.getItem('userData')
        let userData = JSON.parse(response);
        try {
            setUser(userData.name);
        } catch(e) {
            console.log('Nenhum usuário logado.');
        }
        
        console.log(user);
    };

    useEffect(() => {
        getUserData();
    }, []);

    async function logout() {
        try {
            await AsyncStorage.removeItem('userData');
            await AsyncStorage.removeItem('ongData');
            navigation.navigate('home');
          } catch(e) {
            // remove error
          }
    };

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.profileImage} onPress = {() => user == null ? navigation.navigate('login') : navigation.navigate('profile')}>
                <Image source={require('../../assets/user-big.png')}/>
            </TouchableOpacity>
            
            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style = {styles.item} onPress = {() => navigation.navigate('view')}>
                    <Text style = {styles.buttonText}>Aparência e acessibilidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.item}>
                    <Text style = {styles.buttonText}>Pagamento</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.item}>
                    <MaterialIcons name="security" size={24} color="black" />
                    <Text style = {styles.buttonText}>Privacidade</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.logoutBtn} onPress = {logout}>
                <MaterialIcons name="logout" size={25} color="#fff" />
                <Text style = {styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFEFF',
        justifyContent: 'center'
    },
    profileImage: {
        position: 'absolute',
        top: 35,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center'
    },
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 1,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoutBtn: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 56,
        alignItems: 'center'
    },
    logoutText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
    }
})