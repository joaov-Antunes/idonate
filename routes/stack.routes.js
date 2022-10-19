import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home, Login, LoginOng, LoginUser, Profile, VerifyLogin, Search, NewPost, SignUp, SignUpOng, ChooseSignUp, SignUpOngPartTwo, Payment, Pix, History, SignUpUser, Config, Card, Appearance, Ong, FinishPost} from '../pages'

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
                name='profile'
                options = {{
                    headerShown: false
                }}
                component = {Profile}
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

            <Screen
                name='signUp'
                options = {{
                    headerShown: false
                }}
                component = {SignUp}
            />

            <Screen
                name='chooseSignUp'
                options = {{
                    headerShown: false
                }}
                component = {ChooseSignUp}
            />


            <Screen
                name='signUpOng'
                options = {{
                    headerShown: false
                }}
                component = {SignUpOng}
            />

            <Screen
                name='signUpContinuation'
                options = {{
                    headerShown: false
                }}
                component = {SignUpOngPartTwo}
            />

            <Screen
                name='payment'
                options = {{
                    headerShown: false
                }}
                component = {Payment}
            />

            <Screen
                name='pix'
                options = {{
                    headerShown: false
                }}
                component = {Pix}
            />

            <Screen
                name='history'
                options = {{
                    headerShown: false
                }}
                component = {History}
            />

            <Screen
                name='signupUser'
                options = {{
                    headerShown: false
                }}
                component = {SignUpUser}
            />

            <Screen
                name='config'
                options = {{
                    headerShown: false
                }}
                component = {Config}
            />

            <Screen
                name='card'
                options = {{
                    headerShown: false
                }}
                component = {Card}
            />

            <Screen
                name='view'
                options = {{
                    headerShown: false
                }}
                component = {Appearance}
            />

            <Screen
                name='ong'
                options = {{
                    headerShown: false
                }}
                component = {Ong}
            />

            <Screen
                name='finish'
                options = {{
                    headerShown: true
                }}
                component = {FinishPost}
            />
        </Navigator>
    )
}