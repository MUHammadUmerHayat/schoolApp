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
    state={
        renderContent:'material'
    }


    changeRenderContent=(content)=>{
        this.setState({renderContent:content})
    }


    renderContent=()=>{
        if(this.state.renderContent==="material"){
            return <StudentMaterialLiSt changeContent={this.changeRenderContent}/>
        }
        if(this.state.renderContent==="Attendence"){
            return <Attendance attendance={this.props.route.params.StudentAttendances}/>
        }
        
    }
    render() {
        return (
            <Container style={style.container}>
                <StudentProfile student={this.props.route.params}/>
                <Content>
                {this.renderContent()}
                </Content>
            </Container>
        );
    }
}
const style={
}


export default StudentDetail;