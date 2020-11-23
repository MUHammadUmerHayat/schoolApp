import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {Container,Content} from "native-base"
import DateTime from 'react-native-customize-selected-date';
import StudentProfile from "../student/studentProfile";
import HomeWorkList from "./homeorklist"
import _ from 'lodash';

export default class Attendance extends Component {


  render() {
    return (
      <Container>
        <StudentProfile student={this.props.route.params}/>
          <HomeWorkList student={this.props.route.params}/>
      </Container>
    );
  }
}


