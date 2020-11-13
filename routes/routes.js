import React,{Component} from "react";
import {Router,Stack,Scene} from "react-native-router-flux";
import StudentDetail from "../components/student/studentDetail";
import Login from "../components/login";
import ParentsDashboard from "../components/parentDashboard";
import {Container} from "native-base";


export default function Routes(){
    return(
        <Container>
            <Router>
                <Stack key="root">
                <Scene key="login" initial exact component={Login} hideNavBar={true}/>
                <Scene key="parents" hideNavBar>
                <Scene key="parentsDashboard" component={ParentsDashboard}/>
                <Scene key="studentDetails" component={StudentDetail}/> 
                </Scene>
                </Stack>
            </Router>
        </Container>
    )
}