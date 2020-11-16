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
                <Material iconName="ios-notifications" text="Notification"/>
                <Material iconName="md-refresh-circle" text="Circular"/>
                <Material nav={this.props.goTo} iconName="md-calendar" text="Attendence"/>
                </View>
                <View style={style.container}>
                <Material iconName="md-clipboard" text="Challan"/>
                <Material iconName="ios-people" text="Guardians"/>
                <Material iconName="ios-create" text="Diary"/>
                </View>
                <View style={style.container}>
                <Material iconName="md-mail-open" text="Newsletter"/>
                <Material iconName="md-list-box" text="Assessments"/>
                <Material iconName="ios-timer" text="Timetable"/>
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