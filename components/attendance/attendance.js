import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import DateTime from 'react-native-customize-selected-date';
import _ from 'lodash';

export default class Attendance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ''
    }
  }

  onChangeDate(date) {
    alert(date)
  }

  renderChildDay(day) {
    if (_.includes(['2020-11-17', '2020-11-10'], day)) {
      return <Image source={require('../../assets/present.png')} style={styles.icLockRed} />
    }
    if (_.includes(['2020-11-13'], day)) {
      return <Image source={require('../../assets/absent.png')} style={styles.icLockRed} />
    }
    if (_.includes(['2020-11-04',], day)) {
      return <Image source={require('../../assets/late.png')} style={styles.icLockRed} />
    }
    if (_.includes(['2020-11-09',], day)) {
      return <Image source={require('../../assets/holiday.png')} style={styles.icLockRed} />
    }
  }

  render() {
    return (
      <View>
        <DateTime
          containerStyle={{ backgroundColor: 'lightgrey' }}
          currentDayStyle={{ color: 'white' }}
          weekdayStyle={{ color: 'black' }}
          date={this.state.time}
          changeDate={(date) => this.onChangeDate(date)}
          format='YYYY-MM-DD'
          renderChildDay={(day) => this.renderChildDay(day)}
        />
        <View style={styles.parentBox}>
          <View style={styles.box}>
            <View><Image source={require('../../assets/present.png')} style={styles.im} /></View>
            <Text> : Present</Text>
            </View>
            <View style={styles.box}>
            <View><Image source={require('../../assets/absent.png')} style={styles.im} /></View>
            <Text> : Absent</Text>
            </View>
        </View>
        <View style={styles.parentBox}>
            <View style={styles.box}>
            <View><Image source={require('../../assets/late.png')} style={styles.im} /></View>
            <Text> : Late</Text>
            </View>
            <View style={styles.box}>
            <View><Image source={require('../../assets/holiday.png')} style={styles.im} /></View>
            <Text> : holiday</Text>
            </View>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icLockRed: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 6,
    left: 5
  },
  im: {
    width: 25,
    height: 25,
  },
  box:{
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    display:'flex',
    height:40,
    borderRadius:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    backgroundColor:'lightgrey'
  },
  parentBox:{
    marginTop:10,
    display:'flex',


    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  

  }
});

