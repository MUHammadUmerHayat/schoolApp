import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Body,
    Icon,
    Title,
    Right
} from "native-base"
import { Link } from 'react-router-native';
import {Actions} from "react-native-router-flux"
class AppHeader extends Component {
    render() {
        const {
            iconName,
            title
        }=this.props
        return (
                <Header style={style.header}>
                    <Left>
                        <Link to="/parentsDashboard">
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon style={style.menuIcon} name={iconName}/>
                        </Button>
                        </Link>
                    </Left>
                    <Body>
                        <Title style={style.tile}>{title}</Title>
                    </Body>
                    <Right/>
                </Header>
        );
    }
}

const style={
    header:{
        backgroundColor:'red',
    },
    menuIcon:{
        color:'white'
    },
    tile:{
        color:"white"
    }
}

export default AppHeader;