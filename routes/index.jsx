import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './stack.routes';
import { StatusBar } from 'expo-status-bar';

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes/>
            <StatusBar style="light" />
        </NavigationContainer>
    )
}