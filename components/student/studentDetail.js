import React, { Component } from 'react';
import {View} from "react-native"
import StudentProfile from "./studentProfile";
import StudentMaterialList from "./studentMaterialList"
import {
    Container, Content,
} from "native-base"
import StudentMaterialLiSt from './studentMaterialList';
class StudentDetail extends Component {
    render() {
        const {navigation}=this.props
        return (
            <Container style={style.container}>
                <StudentProfile student={this.props.route.params}/>
                <StudentMaterialLiSt goTo={navigation}/>
            </Container>
        );
    }
}
const style={
}


export default StudentDetail;