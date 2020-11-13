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
    return (
      <Container style={{ paddingTop: 25 }}>
        <Header style={{ backgroundColor: 'red' }}>
          <Left>
            <Button transparent>
              <Icon style={{ color: 'white' }} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white' }}>Parents</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <StudentList />
        </Content>
      </Container>
    );
  }
}