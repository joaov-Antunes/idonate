import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
      height: 120,
      backgroundColor: '#4285F4',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 25
    },
    container: {
      backgroundColor: '#FCFEFF',
      flex: 1
    },
    content: {
      alignItems: 'center',
      marginBottom: 90,
    },
    title: {
      fontSize: 24,
      color: '#fcfeff',
      fontFamily: 'PlayfairDisplay_600SemiBold',
      textAlign: 'center',
    },
    card: {
      height: 403,
      borderRadius: 10,
      width: 318,
      marginTop: 13,
    },
    cardHeader: {
      height: 32,
      backgroundColor: '#0D6380',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'center',
      flexDirection: 'row'
    },
    cardContent: {
      height: 82,
      backgroundColor: '#0D6380',
      flexDirection: 'row'
    },
    cardFooter: {
      height: 32,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#0D6380',
      borderTopWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    footer: {
      backgroundColor: '#fcfeef',
      position: 'absolute',
      bottom: 0,
      height: 50,
      flexDirection: 'row',
      borderTopColor: '#000',
      borderTopWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 38
    }, 
    footerIcon: {
      marginRight: 31
    }, 
    footerLogo: {
      marginBottom: 50,
      marginRight: 31
    },
    modalContainer: {
      backgroundColor: 'FCFEFF',
      width: '60%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: "#0D6380",
      borderRadius: 10,
      height: 56,
      alignItems: 'center',
       justifyContent: 'center',
    }
  });
  

export default styles