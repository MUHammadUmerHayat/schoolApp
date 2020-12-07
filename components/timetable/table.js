import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No', 'Course', 'Day', 'Start Time','End Time'],
      tableData: [
      ]
    }
  }
 componentDidMount(){
     const course=this.props.student.StudentClassRoutine.map((i,index)=>[index+1,i.Course,i.Day,i.StartTime,i.EndTimne]);
     this.setState({tableData:course})
 }
  render() {
    const state = this.state;
    console.log('hellowsd',this.props.student.StudentClassRoutine);
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Rows data={state.tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});