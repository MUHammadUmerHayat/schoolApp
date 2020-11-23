import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentDetail from "../components/student/studentDetail";
import Login from "../components/login";
import ParentsDashboard from "../components/parentDashboard";
import StudentMaterialList from "../components/student/studentMaterialList";
import Attendance from "../components/attendance/attendance";
import HomeWork from "../components/homework/homework"
import { Button, Container, Icon } from "native-base";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Container>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'red',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >

                    <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
                        <Stack.Screen
                            name="parentsDashboard"
                            component={ParentsDashboard}
                            options={{
                                title: 'Parents',
                                headerLeft: () => <Button transparent><Icon style={{ color: 'white' }} name="menu" /></Button>
                            }}
                        />
                    <Stack.Screen name="studentDetail" component={StudentDetail} />
                    <Stack.Screen name="attendance" component={Attendance} />
                    <Stack.Screen name="homeWork" component={HomeWork} />
                </Stack.Navigator>
            </NavigationContainer>
        </Container>
    )
}