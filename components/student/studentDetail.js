import React, { Component } from 'react';
import AppHeader from "../header";
import {View} from "react-native"
import StudentProfile from "./studentProfile";
import StudentMaterialList from "./studentMaterialList"
import {
    Container, Content,
} from "native-base"
import StudentMaterialLiSt from './studentMaterialList';
class StudentDetail extends Component {
    render() {
        return (
            <Container style={style.container}>
                <AppHeader iconName="arrow-back" title="Student"/>
                <StudentProfile student={this.props}/>
                <Content>
                <StudentMaterialList/>
                </Content>
            </Container>
        );
    }
}
const style={
    container:{
        paddingTop:20,
    }
}


export default StudentDetail;