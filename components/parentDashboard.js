import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import StudentList from "./studentList";
import { Link } from 'react-router-native';
export default class ParentsDashboard extends Component {
  
  render() {
    const {navigation}=this.props
    return (
      <Container>

        <Content>
          <StudentList goToStudentDetail={navigation}/>
        </Content>
      </Container>
    );
  }
}