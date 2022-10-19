import {Routes} from "./routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  async function getData() {
    let resData = await AsyncStorage.getItem('userData');
  }
  
  getData();

  return (
    <Routes/>
  )
}