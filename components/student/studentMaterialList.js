import React, { Component } from 'react';
import {
    Content,
} from "native-base";
import {View} from "react-native"
import Material from "./material"
class StudentMaterialList extends Component {
    render() {
        return (
            <Content>
                <View style={style.container}>
                <Material changeContent={this.props.changeContent} iconName="ios-notifications" text="Notification"/>
                <Material changeContent={this.props.changeContent} iconName="md-refresh-circle" text="Circular"/>
                <Material go="attendance" student={this.props.student} changeContent={this.props.changeContent}  iconName="md-calendar" text="Attendence"/>
                </View>
                <View style={style.container}>
                <Material changeContent={this.props.changeContent} iconName="md-clipboard" text="Challan"/>
                <Material changeContent={this.props.changeContent} iconName="ios-people" text="Guardians"/>
                <Material changeContent={this.props.changeContent} iconName="ios-create" text="Diary"/>
                </View>
                <View style={style.container}>
                <Material changeContent={this.props.changeContent} iconName="md-mail-open" text="Newsletter"/>
                <Material go="homeWork" student={this.props.student} changeContent={this.props.changeContent} iconName="md-list-box" text="Assessments"/>
                <Material changeContent={this.props.changeContent} iconName="ios-timer" text="Timetable"/>
                </View>
                <View style={style.container}>
                <Material iconName="ios-list-box" text="Syllabus"/>
                <Material iconName="ios-stopwatch" text="Events"/>
                <Material iconName="ios-call" text="Contact"/>
                </View>
            </Content>
        );
    }
}
const style={
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-between',
        alignContent:"space-between"
    },
}
export default StudentMaterialList;