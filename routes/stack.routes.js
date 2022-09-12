import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator()

import { Home, Login, LoginOng, LoginUser, Profile, VerifyLogin, Search, NewPost} from '../pages'

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                options = {{
                    headerShown: false
                }}
                component = {Home}
            />

            <Screen
                name='login'
                options = {{
                    headerShown: false
                }}
                component = {Login}
            />

            <Screen
                name='loginUser'
                options = {{
                    headerShown: false
                }}
                component = {LoginUser}
            />

            <Screen
                name='loginOng'
                options = {{
                    headerShown: false
                }}
                component = {LoginOng}
            />

            <Screen
                name='profile'
                options = {{
                    headerShown: false
                }}
                component = {Profile}
            />

            <Screen
                name='verify'
                options = {{
                    headerShown: false
                }}
                component = {VerifyLogin}
            />

            <Screen
                name='search'
                options = {{
                    headerShown: false
                }}
                component = {Search}
            />

            <Screen
            name='newpost'
            options = {{
                headerShown: false
            }}
            component = {NewPost}
            />

        </Navigator>
    )
}