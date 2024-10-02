import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/login';
import { Text, TouchableOpacity } from 'react-native';
import Register from '../../screens/register';
import Home from '../../screens/home';
import Publicacao from '../../screens/publicacao';
import Perfil from '../../screens/perfil';

const StackNavigation = () => {
    const Routes = createStackNavigator();

    return (
        <Routes.Navigator initialRouteName={"Login"}>
            <Routes.Screen
                options={{ headerShown: false, title: "Login" }}
                name='Login'
                component={Login}
            />

            <Routes.Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: true,
                    headerTitle: () => (
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Criar nova conta
                        </Text>
                    ),
                }}
            />

            <Routes.Screen
                options={{ headerShown: false }}
                name='Home'
                component={Home}
            />

            <Routes.Screen
                name="Publicacao"
                component={Publicacao}
                options={() => ({
                    headerShown: true,
                    headerTitle: () => (
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                            Publicação
                        </Text>
                    )
                })}
            />

            <Routes.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    headerShown: true,
                    headerTitle: () => (
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Perfíl
                        </Text>
                    ),
                }}
            />
        </Routes.Navigator>
    );
};

export default StackNavigation;