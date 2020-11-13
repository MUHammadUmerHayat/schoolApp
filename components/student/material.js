import React, { Component } from 'react';
import {
    Content,
    Card,
    CardItem,
    Body,
    Icon,
    Text,
} from "native-base";
import {View,TouchableOpacity} from "react-native"
class Material extends Component {
    render() {
        const {
            iconName,
            text
        }=this.props
        return (
            <Card style={style.card}>
                <TouchableOpacity>
                <CardItem>
                        <View style={style.iconContainer}><Icon  style={style.icon} name={iconName}/></View>
                </CardItem>
                <CardItem>
                        <View style={style.iconContainer}>
                        <Text note>{text}</Text>
                        </View>
                </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}
const style={
    card:{
        width:'31%',
    },
    icon:{
        color:'#FF5C5C',
        fontSize:40
    },
    iconContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default Material;