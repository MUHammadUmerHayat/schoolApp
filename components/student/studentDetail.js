import React, { Component } from 'react';
import {View} from "react-native"
import StudentProfile from "./studentProfile";
import StudentMaterialList from "./studentMaterialList";
import Attendance from "../attendance/attendance"
import {
    Container, Content,
} from "native-base"
import StudentMaterialLiSt from './studentMaterialList';
class StudentDetail extends Component {

    render() {
        return (
            <Container style={style.container}>
                <StudentProfile student={this.props.route.params}/>
                <Content>
                <StudentMaterialLiSt student={this.props.route.params}/>
                </Content>
            </Container>
        );
    }
}
const style={
}


export default StudentDetail;