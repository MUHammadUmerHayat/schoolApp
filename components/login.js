import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  H1,
  Spinner
} from 'native-base';
import { connect } from "react-redux";
import * as action from "../action";
class Login extends Component {

  state = {
    userName: '',
    password: '',
    loading:false
  }
  spinnerRender=()=>{
    this.setState({loading:!this.state.loading})
  }
  render() {
    return (
      <Container style={{ display: 'flex', alignItems: 'center' }}>
        <Content style={{ width: '90%' }}>
          <H1 style={{ margin: 80, textAlign: 'center' }}>Alpha School</H1>
          <Item error={this.props.currentUser.Error ? true : false}>
            <Icon active name='md-contacts' />
            <Input onChangeText={v => this.setState({ userName: v })} placeholder='User Name' />
          </Item>
          <Item error={this.props.currentUser.Error ? true : false}>
            <Icon active name='ios-key' />
            <Input onChangeText={v => this.setState({ password: v })} secureTextEntry placeholder='Password' />
          </Item>
          <Text>{this.props.currentUser.Error ? this.props.currentUser.Error : null}</Text>
          <Button
            onPress={() => {
              this.spinnerRender()
              this.props.loginRes(this.state,this.spinnerRender,this.props.navigation);
              
            }}
            danger
            block
            style={{ marginTop: 40 }}>
              {this.state.loading?<Spinner color="white"/>:<Text>Login</Text>}
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, action)(Login)