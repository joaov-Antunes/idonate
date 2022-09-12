import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/styles'

export function Footer({ navigation }) {
  function openHome() {
    navigation.navigate('home')
  }

  function openSearch() {
    navigation.navigate('search')
  }

  function openNewPost() {
    navigation.navigate('newpost')
  }

    return (
        <View style = {styles.footer}>
          <TouchableOpacity onPress={openHome}>
            <Ionicons style = {styles.footerIcon} name="home-outline" size={35} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={openSearch}>
            <Ionicons style = {styles.footerIcon} name="search-outline" size={35} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style = {styles.footerLogo} source={require('../assets/logo.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={openNewPost}>
            <Feather style = {styles.footerIcon} name="plus-square" size={35} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <MaterialIcons style = {styles.footerIcon} name="history" size={35} color="black" />
          </TouchableOpacity>
        </View>

    )
}

